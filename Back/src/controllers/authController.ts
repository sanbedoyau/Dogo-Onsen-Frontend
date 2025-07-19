import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Inicializa Prisma para interactuar con la base de datos
const prisma = new PrismaClient();

// POST /register - Registra un nuevo usuario
export const register = async (req: Request, res: Response) => {
  const { nombre, email, password } = req.body;

  try {
    const existingUser = await prisma.usuario.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "Email ya registrado" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: "Usuario creado", userId: newUser.id });
  } catch (error) {
    return res.status(500).json({ message: "Error en registro", error });
  }
};

// POST /login - Inicia sesión y devuelve un token JWT
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Usuario no encontrado" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Contraseña incorrecta" });

    // Genera token JWT con los datos del usuario
    const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET!, {
      expiresIn: "3h",
    });

    return res.json({ token, user: { id: user.id, nombre: user.nombre, rol: user.rol } });
  } catch (error) {
    return res.status(500).json({ message: "Error en login", error });
  }
};
