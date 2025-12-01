"use client"


export default function Formulario({ id, onCommentAdded }) {

  const onSubmit = async (e) => {
    e.preventDefault();
    const contenido = e.target.comentario.value;
    const autor = e.target.nombre.value;
    
    try {
      const res = await fetch('/api/noticias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ autor: autor, contenido: contenido, noticiaId: Number(id) }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('Error creando comentario:', res.status, text);
        return;
      }
      const newComment = await res.json();
      // llamar callback para actualizar UI
      if (typeof onCommentAdded === 'function') onCommentAdded(newComment);

      // limpiar formulario
      e.target.reset();
    } catch (error) {
      console.error('Error en onSubmit:', error);
    }

  }
  return (
    <form className='bg-slate-800 p-10' onSubmit={onSubmit}>
      <label htmlFor="comentario" className='font-bold text-sm text-white'>Deja tu comentario:</label><br />
      <textarea id="comentario" rows="3" cols="30" placeholder="Escribe tu comentario aquí..."
        className='border border-gray-400 p-2 mb-4 w-full text-black'></textarea>
      <input id="nombre" type="text" placeholder="Tu nombre" className='border border-gray-400 p-2 mb-4 w-full text-black' />
      <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Enviar Comentario</button>
    </form>
  )
}