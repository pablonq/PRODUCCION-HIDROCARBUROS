"use client";
import { useState } from 'react';
import Formulario from './Form';

export default function Comentarios({ initialComments=[], id }) {
  const [comentarios, setComentarios] = useState(initialComments);

  const handleNewComment = (comment) => {
    // Insertar al principio para ver el más reciente primero (ajustar según preferencia)
    setComentarios(prev => [comment, ...prev]);
  };
  return (
    <section>
      <h2 className="text-lg font-bold">Comentarios ({comentarios.length})</h2>
      
      <div className="mt-4 space-y-3">
        {comentarios.length === 0 ? (
          <p className="text-center font-bold text-rose-700">No hay Comentarios disponibles.</p>
        ) : (
          comentarios.map(c => (
            <div key={c.id} className="border rounded p-2">
              <strong>{c.autor}</strong> <small className="text-gray-500">({new Date(c.createdAt).toLocaleString()})</small>
              <p>{c.contenido}</p>
            </div>
          ))
        )}
      </div>
      <Formulario id={id} onCommentAdded={handleNewComment} />
    </section>
  )
}