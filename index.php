<?php


    class Libros {

        public function __construct($libro, $autor, $year, $tipo){

            $this->libro = $libro;
            $this->autor = $autor;
            $this->year = $year;
            $this->tipo = $tipo;
        }
    }

    $dracula = new Libros('Drácula', 'Bram Stoker', 1800, 'Gótico');
    $iliada = new Libros('Ilíada', 'Homero', 'Desconocido', 'Ninguno');


    echo "Me gusta mucho el libro llamado $dracula->libro, escrito por el autor $dracula->autor en el año $dracula->year.<br>";

    echo "Me gusta mucho el libro llamado $iliada->libro, escrito por el autor $iliada->autor en el año $iliada->year.";
?>