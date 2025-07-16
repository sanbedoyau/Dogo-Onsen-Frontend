import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

// Inicializa Prisma
const prisma = new PrismaClient();

// GET /perfil - Obtener perfil del usuario autenticado
export const getPerfil = async (req: Request, res: Response) => {
  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id: req.user!.id },  // ID del usuario obtenido desde middleware auth
      select: {
        id: true,
        nombre: true,
        email: true,
        descripcion: true,
        tipo: true,
        imagen: true,
      },
    });

    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener perfil" });
  }
};

// GET /usuarios - Obtener todos los usuarios
export const getTodosLosUsuarios = async (_req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      select: {
        id: true,
        email: true,
        password: true,
        nombre: true,
        tipo: true,
        imagen: true,
        descripcion: true,
        rol: true,
      },
    });

    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error });
  }
};

// POST /usuarios - Crear un nuevo usuario
export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const { email, password, nombre, tipo, imagen, descripcion, rol } = req.body;

    const nuevoUsuario = await prisma.usuario.create({
      data: {
        email,
        password,
        nombre,
        tipo,
        imagen,
        descripcion,
        rol,
      },
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear usuario" });
  }
};

// PUT /usuarios/:id - Actualizar usuario por ID
export const actualizarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, nombre, tipo, imagen, descripcion, rol } = req.body;

    const actualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: {
        email,
        password,
        nombre,
        tipo,
        imagen,
        descripcion,
        rol,
      },
    });

    res.json(actualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

// DELETE /usuarios/:id - Eliminar usuario por ID
export const eliminarUsuario = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.usuario.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar usuario" });
  }
};
