<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Orientaciones metodológicas para la atención psicosocial
    p.mb-5(data-aos="fade-down") Las orientaciones metodológicas para la atención psicosocial constituyen un conjunto de principios, enfoques y procedimientos que guían la intervención con población migrante, personas colombianas retornadas y comunidades de acogida. Estas orientaciones organizan la forma en que se desarrollan la consejería, la comunicación y la primera atención emocional en situaciones de crisis, garantizando que los procesos sean coherentes, humanizados y culturalmente pertinentes.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El Ministerio de Salud y Protección Social (MSPS, 2023), junto con organismos internacionales como la Organización Mundial de la Salud (OMS), el Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR) y la Organización Panamericana de la Salud (OPS), establecen que la atención psicosocial debe fundamentarse en enfoques de derechos humanos, enfoque diferencial e intercultural. Estos lineamientos promueven intervenciones oportunas orientadas al fortalecimiento de la dignidad humana, los recursos de afrontamiento y el bienestar emocional en contextos de movilidad humana.
    p.mb-0(data-aos="fade-down") En este marco, las orientaciones metodológicas permiten estructurar intervenciones seguras, respetuosas y éticamente responsables, facilitando la adaptación de las estrategias a las necesidades individuales, familiares y comunitarias. Asimismo, favorecen la construcción de relaciones de confianza, la prevención de la revictimización y el fortalecimiento de entornos protectores que contribuyen a la estabilidad emocional y a la integración social de las personas en situación de movilidad humana.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Consejería y apoyo psicosocial
    p(data-aos="fade-down") La consejería psicosocial es un proceso de acompañamiento breve y focalizado que busca apoyar a las personas en la identificación de sus necesidades, el fortalecimiento de sus capacidades y la movilización de recursos individuales, familiares y comunitarios. En contextos de movilidad humana, este proceso adquiere especial relevancia debido a la exposición a eventos estresantes, la ruptura de redes de apoyo, las pérdidas materiales y emocionales y los procesos de adaptación a nuevos entornos (MSPS).
    p.mb-5(data-aos="fade-down") A través de la consejería psicosocial se pretende favorecer en la población migrante, personas retornadas y comunidades de acogida los siguientes aspectos:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-0(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Acercamiento y reconocimiento
            p Facilita la construcción de un vínculo basado en la empatía, la escucha activa y el respeto por la experiencia migratoria. Este proceso permite reconocer el contexto de desplazamiento, los riesgos vividos, los recursos disponibles y las expectativas frente a la atención, generando un ambiente seguro y libre de juicios (ACNUR, 2024).
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img02.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Fortalecimiento de la autoestima, la autoconfianza y los recursos de afrontamiento
            p Promueve el reconocimiento de las capacidades personales y colectivas, fortaleciendo la adaptación y la resiliencia emocional. La consejería orienta la identificación de habilidades, redes de apoyo y estrategias previas que han permitido afrontar situaciones adversas (OPS).
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img03.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Resignificación de la experiencia migratoria
            p Favorece la reinterpretación de las vivencias asociadas a la movilidad humana, integrando pérdidas y aprendizajes. Este proceso contribuye a la reconstrucción del proyecto de vida y a la disminución de sentimientos de culpa, ansiedad y desarraigo (MSPS).
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img04.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Manejo de emociones
            p Incluye la identificación, expresión y regulación de emociones asociadas al proceso migratorio. Se integran estrategias breves como la respiración consciente, el reconocimiento de detonantes y la orientación hacia conductas protectoras, favoreciendo respuestas más adaptativas ante el estrés (OMS).
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img05.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Solución de problemas
            p Orienta la toma de decisiones mediante la clarificación de situaciones, la exploración de alternativas y la definición de pasos concretos para responder a necesidades inmediatas. Este proceso fortalece la sensación de control y reduce la percepción de desbordamiento emocional (OMS).
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img06.jpg', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Habilidades comunicativas en la intervención psicosocial
    p(data-aos="fade-down") La intervención psicosocial requiere el desarrollo de habilidades comunicativas que permitan establecer relaciones de ayuda efectivas, basadas en el respeto, la claridad, la empatía y la pertinencia cultural. En contextos de movilidad humana, estas habilidades son especialmente importantes debido a la diversidad lingüística, las diferencias culturales, las experiencias de discriminación y las posibles desconfianzas derivadas de trayectorias previas de violencia, exclusión o ruptura de vínculos comunitarios.
    p(data-aos="fade-down") Estas habilidades no se limitan a la transmisión de información, sino que constituyen un elemento central para generar confianza, favorecer la participación activa y asegurar procesos de acompañamiento acordes con las realidades y necesidades de cada persona o comunidad.
    p.mb-5(data-aos="fade-down") Las habilidades a tener en cuenta incluyen:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-0(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Escucha activa
              p Consiste en prestar atención plena a lo que la persona expresa, tanto en el plano verbal como en el emocional y corporal. Implica observar gestos, silencios, tono de voz y lenguaje no verbal, permitiendo validar las emociones y fortalecer el vínculo de confianza necesario para el acompañamiento psicosocial (ACNUR).
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img07.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Expresión clara
              p Se refiere al uso de un lenguaje sencillo, concreto y libre de tecnicismos, ajustado al nivel de comprensión de la persona. Esta habilidad facilita la comprensión de la información, previene interpretaciones erróneas y fortalece la autonomía en la toma de decisiones (OIM).
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img08.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Claridad y respeto
              p Implica comunicar de manera honesta, coherente y transparente, respetando la dignidad humana y evitando actitudes paternalistas, juicios de valor o formas sutiles de discriminación. Estos elementos garantizan una atención ética, segura y basada en la confianza mutua (ONU, 2018).
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img09.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Apertura mental
              p Supone la disposición para reconocer y aceptar diferencias culturales, religiosas, lingüísticas y de género, evitando prejuicios y estereotipos. Esta actitud favorece intervenciones más inclusivas, disminuye barreras de comunicación y fortalece el reconocimiento de la diversidad.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img10.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Adaptación cultural
              p Consiste en ajustar los mensajes, las estrategias de comunicación y las formas de intervención al marco simbólico y cultural de la persona o comunidad. Esto incluye reconocer costumbres, normas sociales, estilos de comunicación y valores propios de los contextos de origen, promoviendo una atención culturalmente pertinente (OIM).
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img11.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Enfoque de derechos, diferencial e intercultural
              p La intervención psicosocial se fundamenta en la protección de los derechos humanos y en la identificación de necesidades específicas de grupos como mujeres, niños, niñas y adolescentes, población LGBTIQ+, comunidades étnicas y personas con discapacidad. Este enfoque asegura que la atención se realice bajo principios de equidad, no discriminación e inclusión, fortaleciendo la justicia social en los procesos de acompañamiento (MSPS, 2023).
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img12.jpg', alt='Imagen decorativa')
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Primeros Auxilios Psicológicos (PAP) en población migrante
    p.mb-5(data-aos="fade-down") Los Primeros Auxilios Psicológicos (PAP) corresponden a una intervención inmediata, breve y no especializada que busca reducir la angustia emocional, promover la sensación de seguridad y favorecer la estabilidad psicológica en personas que han experimentado situaciones de crisis. En el contexto de la movilidad humana, los PAP adquieren especial relevancia debido a la alta exposición a eventos traumáticos, violencia, pérdidas, rupturas familiares y condiciones de vulnerabilidad. Su objetivo es brindar espacios de contención emocional, disminuir el impacto inicial del estrés y facilitar el acceso oportuno a redes de apoyo y servicios de salud mental.
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.col-md-7.order-lg-1.order-1
        figure
          img(src='@/assets/curso/temas/tema3/img13.svg', alt='Imagen decorativa')
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-2
          p.mb-0(data-aos="fade-down") Los PAP no sustituyen los procesos terapéuticos especializados, sino que actúan como un primer nivel de atención orientado a estabilizar a la persona y fortalecer sus recursos inmediatos de afrontamiento, garantizando una atención digna, ética y centrada en la persona.
        p.mb-0(data-aos="fade-down") En el marco de los Primeros Auxilios Psicológicos (PAP), la intervención se estructura a partir de componentes clave que permiten responder de manera inmediata, humana y eficaz a las necesidades emocionales de la población migrante. Estos componentes orientan la actuación del personal de apoyo, priorizando la seguridad, la validación de la experiencia vivida y la activación de redes de soporte, con el fin de reducir la angustia, favorecer la estabilización emocional y facilitar el acceso a servicios de atención integral. A continuación, se describen los componentes principales:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.justify-content-center.p-4(titulo="Intervención en crisis")
        .col-lg-5.order-lg-1.order-2
          p Se orienta a garantizar la seguridad física y emocional de la persona, ofrecer apoyo inmediato y restablecer la sensación de control. De acuerdo con la OMS, este tipo de intervención busca disminuir la angustia intensa, prevenir la desorganización emocional y favorecer respuestas adaptativas ante la situación vivida.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img14.jpg', alt="Imagen decorativa")
      .row.justify-content-center.p-4(titulo="Validación de la experiencia migratoria")
        .col-lg-5.order-lg-1.order-2
          p Implica el reconocimiento explícito del sufrimiento, las pérdidas, los miedos y los cambios asociados al proceso migratorio. Según ACNUR (2024), este proceso fortalece la dignidad humana, reduce sentimientos de culpa o vergüenza y facilita la expresión emocional en un entorno seguro y respetuoso.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img15.jpg', alt="Imagen decorativa")
      .row.justify-content-center.p-4(titulo="Acciones inmediatas de apoyo")
        .col-lg-5.order-lg-1.order-2
          p La Organización Mundial de la Salud (OMS) propone un modelo básico de actuación para los PAP basado en tres acciones fundamentales:
          p <b>Estar</b>: ofrecer una presencia calmada, cercana y respetuosa, garantizando seguridad y apoyo práctico.
          p <b>Escuchar</b>: permitir que la persona exprese libremente sus necesidades, preocupaciones y emociones, sin presionar ni revictimizar.
          p <b>Conectar</b>: facilitar el acceso a rutas de atención, servicios institucionales y redes de apoyo comunitario.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img16.jpg', alt="Imagen decorativa")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
