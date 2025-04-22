import { z } from "zod";
import { registerService } from "../service/serviceAuth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prismaclient.js";
import dotenv from "dotenv";
dotenv.config();

const authSchema = z.object({
  userFirstname: z.string().min(1, { message: "Firstname is required" }),
  userLastname: z.string().min(1, { message: "Lastname is required" }),
  userEmail: z.string().email({ message: "Invalid email address" }),
  userPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  userPhone: z.string().min(1, { message: "Phone number is required" }).optional(),
  userImage: z.string().optional(),
  userRole: z.enum(["user", "admin"]).optional(),
});

export const register = async (req, res) => {
  try {
    const vaildatedData = authSchema.parse(req.body);
    const { userPassword } = vaildatedData;
    const solt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, solt);

    const userData = {
      ...vaildatedData,
      userPassword: hashedPassword,
    };

    await registerService(userData);

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    const user = await prisma.user.findUnique({
      where: { userEmail: userEmail },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = {
      userId: user.id,
      userEmail: user.userEmail,
      userRole: user.userRole,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
