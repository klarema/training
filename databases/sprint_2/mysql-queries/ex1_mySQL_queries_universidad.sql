SELECT persona.apellido1, persona.apellido2, persona.nombre FROM universidad.persona WHERE persona.tipo='alumno' ORDER BY persona.apellido1, persona.apellido2, persona.nombre;
SELECT persona.apellido1, persona.apellido2, persona.nombre FROM universidad.persona WHERE persona.telefono IS NULL AND persona.tipo='alumno';
SELECT persona.apellido1, persona.apellido2, persona.nombre FROM universidad.persona WHERE persona.fecha_nacimiento REGEXP "^1999" AND persona.tipo='alumno';
SELECT persona.apellido1, persona.apellido2, persona.nombre FROM universidad.persona WHERE persona.telefono IS NULL AND persona.tipo='profesor';
SELECT asignatura.nombre FROM universidad.asignatura WHERE asignatura.cuatrimestre='1' AND asignatura.curso='3' AND asignatura.id_grado='7';
SELECT persona.apellido1, persona.apellido2, persona.nombre, profesor.id_departamento FROM universidad.persona JOIN universidad.profesor ON persona.id=profesor.id_profesor;
SELECT a.nombre AS asignaturaName, ce.anyo_inicio, ce.anyo_fin FROM universidad.alumno_se_matricula_asignatura ama JOIN universidad.curso_escolar ce ON ce.id=ama.id_curso_escolar JOIN universidad.asignatura a ON a.id=ce.id JOIN universidad.persona p ON p.id=ama.id_alumno WHERE p.nif='26902806M';
SELECT DISTINCT d.nombre AS dept FROM universidad.departamento d JOIN universidad.profesor pr ON pr.id_departamento=d.id JOIN universidad.asignatura a ON a.id_profesor=pr.id_profesor JOIN universidad.grado gr ON gr.id=a.id_grado WHERE gr.nombre = 'Grado en Ingeniería Informática (Plan 2015)';
SELECT DISTINCT p.nombre FROM universidad.persona p JOIN universidad.alumno_se_matricula_asignatura ama	ON p.id=id_alumno JOIN universidad.curso_escolar ce ON ama.id_curso_escolar=ce.id WHERE ce.anyo_inicio='2018';
SELECT d.nombre AS department_name, p.nombre, p.apellido1, p.apellido2 FROM departamento d JOIN profesor pr ON d.id = pr.id_departamento RIGHT JOIN persona p ON p.id = pr.id_profesor WHERE p.tipo='profesor'ORDER BY p.nombre, p.apellido1, p.apellido2;
SELECT p.nombre, p.apellido1, p.apellido2 FROM profesor pr JOIN persona p ON p.id=pr.id_profesor LEFT JOIN departamento d ON d.id = pr.id_departamento WHERE pr.id_profesor IS NULL;
SELECT d.nombre AS department_name FROM profesor pr RIGHT JOIN departamento d ON d.id = pr.id_departamento WHERE pr.id_profesor IS NULL;
SELECT a.nombre, a.id_profesor, p.nombre, p.apellido1, p.apellido2, p.tipo FROM asignatura a RIGHT JOIN persona p ON p.id = a.id_profesor WHERE a.id_profesor IS NULL AND p.tipo='profesor';
SELECT a.nombre, p.id_profesor FROM profesor p RIGHT JOIN asignatura a ON p.id_profesor=a.id_profesor WHERE p.id_profesor IS NULL;
SELECT d.nombre	FROM asignatura a JOIN profesor pr ON a.id_profesor=pr.id_profesor RIGHT JOIN departamento d ON d.id=pr.id_departamento WHERE a.id_profesor IS NULL;
SELECT persona.nombre FROM universidad.persona WHERE persona.tipo='alumno';
SELECT Count(persona.nombre) FROM universidad.persona WHERE persona.fecha_nacimiento REGEXP "^1999" AND persona.tipo='alumno';
SELECT d.nombre, p.nombre FROM universidad.profesor pr JOIN universidad.departamento d  ON pr.id_departamento=d.id JOIN persona p ON pr.id_profesor=p.id ORDER BY p.nombre;
SELECT d.nombre AS dept, p.nombre AS prof FROM universidad.persona p JOIN universidad.profesor pr ON pr.id_profesor=p.id RIGHT JOIN universidad.departamento d ON pr.id_departamento=d.id;
SELECT g.nombre AS grado, a.nombre AS asignaura FROM universidad.grado g LEFT JOIN universidad.asignatura a ON a.id_grado=g.id ORDER BY a.nombre;
SELECT g.nombre AS grado_name, a.nombre AS asignaura FROM universidad.grado g JOIN universidad.asignatura a ON a.id_grado=g.id HAVING COUNT(a.nombre) > 40;