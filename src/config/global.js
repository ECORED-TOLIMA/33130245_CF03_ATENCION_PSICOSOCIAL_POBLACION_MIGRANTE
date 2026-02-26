export default {
  global: {
    componenteFormativo:
      'Herramientas de acompañamiento psicosocial para la población migrante',
    descripcionCurso:
      'Este componente ofrece las herramientas esenciales para evaluar, intervenir y acompañar psicosocialmente a personas migrantes, retornadas y comunidades de acogida. Presenta técnicas individuales, familiares, grupales y comunitarias, así como orientaciones metodológicas para la consejería, la comunicación y los primeros auxilios psicológicos. Además, integra criterios para el registro, la activación de rutas, el seguimiento y la aplicación de protocolos vigentes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Herramientas para la evaluación psicosocial en movilidad humana',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y fundamentos de la evaluación psicosocial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Instrumentos de valoración individual y familiar',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de evaluación comunitaria',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas para la intervención psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas individuales de apoyo emocional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias familiares y redes de apoyo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas grupales y comunitarias',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Prácticas psicoeducativas y fortalecimiento del afrontamiento',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Orientaciones metodológicas para la atención psicosocial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Consejería y apoyo psicosocial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Habilidades comunicativas en la intervención psicosocial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Primeros Auxilios Psicológicos (PAP) en población migrante',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Metodología para la implementación operativa y el seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Registro, activación de rutas y remisión',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Seguimiento y monitoreo psicosocial',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Protocolos y lineamientos técnicos vigentes',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33130235_CF3_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3. Técnicas de evaluación comunitaria',
      referencia:
        'Humanity & Inclusion América Latina y El Caribe. (2020). <em>Acompañamiento psicosocial, “Apoyo a las personas migrantes venezolanas más vulnerables en Medellín</em>” [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VNFx-xJ1Yx8',
    },
    {
      tema: '2. Herramientas para la intervención psicosocial',
      referencia:
        'E.S.E. Hospital La Misericordia Calarcá. (2022). <em>Enfoque psicosocial</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fLzTmJhspUA',
    },
  ],
  glosario: [
    {
      termino: 'Acompañamiento psicosocial',
      significado:
        'Proceso integral que busca promover el bienestar emocional, social y comunitario de las personas afectadas por experiencias de movilidad humana.',
    },
    {
      termino: 'Afrontamiento',
      significado:
        'Conjunto de estrategias internas y externas que utiliza una persona o familia para manejar situaciones estresantes o complejas, especialmente derivadas de la migración.',
    },
    {
      termino: 'Cartografía social',
      significado:
        'Herramienta participativa que permite representar colectivamente el territorio, sus dinámicas, riesgos, recursos y redes comunitarias.',
    },
    {
      termino: 'Contención emocional',
      significado:
        'Intervención breve orientada a brindar calma, seguridad y estabilidad emocional a una persona en situación de crisis o angustia.',
    },
    {
      termino: 'Genograma',
      significado:
        'Diagrama que muestra la estructura familiar, los vínculos entre miembros y eventos significativos, útil para comprender la historia migratoria.',
    },
    {
      termino: 'Intervención comunitaria',
      significado:
        'Conjunto de estrategias colectivas orientadas a fortalecer la convivencia, las redes sociales y el tejido comunitario en territorios receptores de población migrante.',
    },
    {
      termino: 'Intervención psicosocial',
      significado:
        'Acción planificada que busca fortalecer el bienestar emocional y social de las personas mediante metodologías participativas, comunitarias y culturalmente pertinentes.',
    },
    {
      termino: 'Psicoeducación',
      significado:
        'Proceso de entrega de información clara sobre emociones, reacciones psicológicas y estrategias de afrontamiento para fortalecer el bienestar.',
    },
    {
      termino: 'Redes de apoyo',
      significado:
        'Conjunto de personas, instituciones, organizaciones y recursos comunitarios que brindan asistencia emocional, social o práctica.',
    },
    {
      termino: 'Registro psicosocial',
      significado:
        'Documento estructurado que recoge información esencial sobre la situación emocional, social y contextual de la persona atendida.',
    },
    {
      termino: 'Remisión',
      significado:
        'Proceso mediante el cual un caso es trasladado formalmente a otra institución para recibir atención especializada o complementaria.',
    },
    {
      termino: 'Ruta de atención',
      significado:
        'Secuencia organizada de acciones y servicios que orientan la atención y protección de personas migrantes y retornadas.',
    },
    {
      termino: 'Seguimiento psicosocial',
      significado:
        'Proceso sistemático de verificación del avance, necesidades y evolución del acompañamiento brindado.',
    },
    {
      termino: 'Trabajo grupal',
      significado:
        'Metodología de intervención que reúne a varias personas para promover apoyo mutuo, compartir experiencias y fortalecer herramientas emocionales.',
    },
  ],
  referencias: [
    {
      referencia: 'ACNUR. (s. f.). <em>Salud mental y apoyo psicosocial</em>.',
      link:
        'https://www.acnur.org/que-hacemos/salvaguardar-los-derechos-humanos/salud-publica/salud-mental-y-apoyo-psicosocial',
    },
    {
      referencia:
        'ACNUR. (2021). <em>Herramienta de ACNUR para el diagnóstico participativo: Guía práctica</em>. Alto Comisionado de las Naciones Unidas para los Refugiados.',
      link: '',
    },
    {
      referencia:
        'ACNUR. (2024). <em>Directrices operacionales del ACNUR sobre salud mental y apoyo psicosocial y protección de la niñez y la adolescencia</em>.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2019). <em>RIAS Salud Mental</em>. MSPS.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Atención psicosocial en emergencias</em>. MSPS.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/PS/Atencion-psicosocial-en-emergencias.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). <em>Estrategia de acompañamiento psicosocial para población migrante venezolana, población colombiana retornada, comunidades de acogida o receptoras, y lineamientos para su implementación</em>. MSPS.',
      link:
        'https://www.minsalud.gov.co/Anexos_Normatividad_Nuevo/Estrategia_psicosocial_poblacion_migrante_y_lineamientos.pdf',
    },
    {
      referencia:
        'Organización Internacional para las Migraciones. (2019). <em>Guía para la atención psicosocial a personas migrantes</em> (Manual de salud mental y apoyo psicosocial). OIM.',
      link: '',
    },
    {
      referencia:
        '<em>Organización Internacional para las Migraciones. (2020). Salud mental, respuesta psicosocial y comunicación intercultural</em>. OIM',
      link: '',
    },
    {
      referencia:
        'Organización Internacional para las Migraciones. (2021). <em>Manual sobre salud mental y apoyo psicosocial de base comunitaria en emergencias y desplazamiento</em>. OIM. ',
      link:
        'https://www.iom.int/sites/g/files/tmzbdl2616/files/mhpss/segunda-edicion-manual-smaps-emergencias-y-desplazamiento.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (s. f.). <em>Salud mental y apoyo psicosocial en emergencias SMAPS</em>.',
      link:
        'https://www.paho.org/es/temas/salud-mental-apoyo-psicosocial-emergencias-smaps',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2021). <em>Migración y Salud en las Américas</em>. OPS.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2011). <em>Psychological first aid: Guide for field workers</em>. OMS.',
      link: 'https://www.who.int/publications/i/item/9789241548205',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2018). <em>Manejo de emociones</em>. OMS.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2018). <em>Pacto Mundial para la Migración Segura, Ordenada y Regular</em>. ONU',
      link: '',
    },
    {
      referencia:
        'Secretaría de Integración Social Bogotá – Alcaldía Mayor. (2020). <em>Cartilla Yo Panita</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        // {
        //   nombre: 'Milady Tatiana Villamil Castellanos',
        //   cargo:
        //     'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
        //   centro: 'Dirección General',
        // },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carolina Yusunguaira Ceballos',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
