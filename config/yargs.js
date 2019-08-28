const descripcion = {
	demand: true,
	alias: 'd',
	desc: 'descripcion de la tarea por hacer'
	
};

const completado = {
	default: true,
	alias: 'c',
	desc: 'marca como completada o pendiente la tarea'
};


const argv = require('yargs')
					.command('crear', 'crear un elemento por hacer', {
						descripcion	
					})
					.command('actualizar', 'actualiza la tarea ',{
						descripcion,
						completado

					})
					.command('borrar', 'borrar una tarea',{
						descripcion
					})
					.help()
					.argv;


module.exports = {
	argv
}