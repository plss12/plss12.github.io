# Perfil y contenido de la web

Resumen curado a partir de `contexto/` (CV, TFG, TFM, notas, fotos) y del GitHub público.
Solo contiene datos aptos para publicar. Es el brief editorial del que salen los textos
ES/EN de `src/data/`. Si algo cambia, actualizar ambos.

## Identidad

- **Nombre:** Pedro Luis Soto Santos
- **Titular:** Ingeniero de IA (EN: AI Engineer), especializado en Python.
- **Mensaje principal:** «Enseño a las máquinas a decidir.» / «I teach machines to make decisions.»
- **Ubicación:** España. Abierto a trabajar en cualquier país de Europa, en modalidad híbrida o presencial.
- **Idiomas:** español (nativo), inglés (C1, Cambridge; ha vivido y trabajado en Australia).
- **Contacto público:** pepoluis712@gmail.com, [GitHub](https://github.com/plss12) y [LinkedIn](https://www.linkedin.com/in/plss12/).

## Posicionamiento

Hilo conductor: **agentes que aprenden a decidir.** El aprendizaje por refuerzo, los sistemas
multiagente y la combinación de búsqueda con redes neuronales son la base de la IA agéntica
actual, y el perfil lo demuestra con código. Cada capacidad se presenta con su prueba; nada se
afirma sin respaldo.

Capacidades, por orden de relevancia para el mercado (`src/data/capabilities.ts`):

1. Agentes y aprendizaje por refuerzo multiagente (TFM; DDDQL, MAPPO y AlphaZero desde cero).
2. Herramientas para agentes LLM con MCP (pyplAI-MCP).
3. Entornos de simulación para entrenar agentes (simulador lunar con Gymnasium).
4. Planificación y búsqueda con redes neuronales (Connect-X AlphaZero, pyplAI).
5. Software de IA publicado y documentado (pyplAI en PyPI).
6. Datos en producción para modelos de IA (Minsait, −50 % de tiempo ETL).

**Python** es el lenguaje principal y se destaca de forma natural, sin repetirlo en cada línea:
en la presentación, en la capacidad
«Python limpio, documentado y publicado», en la línea «Hecho con…» de cada proyecto (pyplAI:
Python puro, sin dependencias), en la capacidad de datos (Python + ODI) y en el perfil del CV.

MCP y los agentes LLM se respaldan con pyplAI-MCP. LLMs (en general) y RAG siguen apareciendo
solo como herramientas hasta que haya un proyecto que lo demuestre. Siguiente paso previsto:
medir con modelos abiertos servidos en local (Ollama) cuánto mejora su juego la búsqueda.

En segundo plano: Kaggle básicos (no se muestran), Java, diseño (SolidWorks, Photoshop) y Scrum
(solo en el CV original), Deloitte (un único logro) y la etapa internacional (una línea).

## Resultados destacados (`src/data/highlights.ts`)

- **Top 10 mundial** en la competición ConnectX de Kaggle, con AlphaZero desde cero.
- **Matrícula de Honor** en el TFM y en el TFG.
- **−50 % de tiempo** de ejecución en los procesos diarios de los modelos de riesgo de un banco de primer nivel.

## Formación

| Título | Centro | Fecha | Destacado |
| --- | --- | --- | --- |
| Máster Universitario en Inteligencia Artificial | Universidad Internacional de Valencia (VIU) | sep 2024 | Matrícula de Honor en el TFM (MADRL). Optativa de computación cuántica. |
| Grado en Ingeniería Informática – Ingeniería del Software | Universidad de Sevilla | jun 2023 | Matrícula de Honor en el TFG y en la asignatura de IA. Alumno interno del Dpto. de Ciencias de la Computación e IA. |

## Experiencia

- **Data Engineer, Minsait (Indra)**, Sevilla, jun 2023 – feb 2025
  - Modernización de flujos de datos para un gran cliente bancario, sobre uno de los mayores entornos Oracle Big Data del mundo, como soporte de modelos de riesgo basados en IA.
  - Pipelines ETL con Oracle Data Integrator y Python: **−50 % de tiempo de procesamiento**.
- **Software Engineer, Deloitte**, Sevilla, ene 2023 – jun 2023
  - Seguimiento y coordinación de proyectos de desarrollo para el Ministerio de Sanidad.
- **Etapa internacional** (mar 2025 – ago 2026, Australia y España), con título propio como el resto de etapas: planificada para alcanzar el C1 y desarrollar liderazgo. Front Office Assistant en Accor (Brisbane) y monitor de inmersión lingüística en InterWay. En el CV va resumida en una línea.

## Proyectos

1. **Lunar-Rover-MADRL** (TFM, Matrícula de Honor). Protagonista de la portada (mapa con los objetivos conocidos y explicación breve) y caso de estudio (comparación de algoritmos y de los dos modos del mapa).
   - Planificación de rutas multiagente con DRL para rovers lunares, como alternativa a la planificación centralizada.
   - Simulador propio con Gymnasium + Pygame. Mejoras clave: mapa de visitas, recompensas intermedias por campo de potencial y observaciones normalizadas que permiten generalizar.
   - DDDQL y MAPPO desde cero (NumPy, TensorFlow, Keras). Entrenamiento en mapas 12 × 12, 3 rovers, visión de 3 casillas.
   - Resultados reales: DDDQL pasa de −6,8 a +16,6 de recompensa media por acción en 3,75 M pasos; MAPPO se queda en negativo en 6 M. DDDQL resuelve **8 de 8** escenarios con **0 colisiones**; el primero suma 83 pasos (41 conociendo los objetivos).
   - Datos: `src/data/metrics/*.csv` (del repo) y `src/data/lunar-scenario.ts` (figuras 5.9 y 5.10 transcritas: modos `exploring` e `informed`).
2. **pyplAI** (TFG, Matrícula de Honor). Caso de estudio.
   - Biblioteca en PyPI con Minimax (alfa-beta), MCTS-UCT, SO-ISMCTS y MO-ISMCTS.
   - 8 juegos de ejemplo y algoritmo genético para la colocación inicial del Stratego.
   - **pyplAI Web** (https://plss12.github.io/pyplai-web/, repo `plss12/pyplai-web`, 15-10-2026): Ultimate contra el MCTS de pyplAI 1.1.0 en el navegador (Pyodide en un Web Worker, sin backend, GitHub Pages). 4 niveles por iteraciones (25/200/1.600/6.400) calibrados con un torneo de 1.080 partidas (ratings Bradley-Terry); pista con la fuerza del nivel (mínimo 200) y una por turno; vista de lo que piensa la IA; ES/EN; jugable con teclado. Velocidad medida: 2.755–3.704 iteraciones/s en Safari de iPhone. Enlazado desde la tarjeta y el caso de estudio de pyplAI.
3. **pyplAI-MCP**: servidor MCP open source que expone pyplAI como herramientas para LLMs.
   - 7 herramientas (`list_games`, `get_rules`, `new_game`, `get_state`, `play_move`, `analyze_position`, `end_game`), el recurso `rules://{game}` y el prompt `play_game`. Salida estructurada con esquema. `get_rules` existe porque el modelo en Claude Desktop no lee recursos (visto en la demo).
   - Benchmark (`benchmarks/` del repo, 960 partidas: tres en raya y Phantom el 14-10-2026, Ultimate repetido el 15-10-2026 tras hacer sus reglas unas 3 veces más rápidas de buscar, sin cambiar ninguna conclusión): Llama 3.2 3B en local con Ollama, con y sin `analyze_position`. Solo pierde el 100 % en tres en raya y Ultimate contra MCTS; con la búsqueda, en tres en raya pasa a 31 % de derrotas (sigue la recomendación el 80 % de las veces; en las 34 partidas en que la siguió siempre, 34 tablas) y en Ultimate no gana ninguna partida (0/3/37 de 40) mientras que la búsqueda sola gana 33 de 40 (analiza antes del 67 % de sus jugadas, sigue el 60 % y nunca durante una partida entera). Phantom: solo 57/1/42 % (V/E/D), con búsqueda 45/28/27 %, búsqueda sola 48/32/20 %. Conclusión: la herramienta ayuda en la medida en que el modelo se fía de ella.
   - Demo: partida de Phantom contra MO-ISMCTS jugada por Claude desde Claude Desktop (tablas); destapó dos fallos del servidor, corregidos en el commit 23ca07c.
   - 3 juegos: tres en raya, Ultimate y Phantom (4,4,4), con información oculta: el análisis usa ISMCTS y un test comprueba que no se filtran fichas ocultas.
   - Visual de la tarjeta: análisis real de MO-ISMCTS (5 s, 13 449 iteraciones) en una posición de Phantom.
   - Publicado en GitHub (https://github.com/plss12/pyplAI-MCP); se instala con `uvx --from git+...`.
   - Pendiente, cuando se recupere la cuenta de PyPI: publicar pyplAI 1.1.0 y pyplai-mcp en PyPI, darlo de alta en el registro oficial de MCP y añadir el enlace a PyPI en la tarjeta (`src/data/projects.ts`).
4. **Connect-X AlphaZero**: AlphaZero desde cero, **top 10 global**; comparativa con Rainbow DQN y PPO (Tianshou) y MCTS/Minimax (pyplAI).
5. **Kaggle** (una línea): Store Sales, top 5 %; Spaceship Titanic, top 2 %.

## Dirección de diseño y tono

- **Referencias:** Apple y Nike. Sencillez, jerarquía clara y un único elemento llamativo.
- **Tono:** cercano y sencillo, sin caer en lo informal. Primera persona, frases cortas y cifras reales.
- **Estética:** monocromo, una sola familia tipográfica (Instrument Sans con eje de anchura), mucho aire. El color se reserva a los datos.
- **Fotos:** profesional en la cabecera (retocada: sin marca de agua y con negros profundos) y de graduación en Formación.
- **Evitar:** barras de nivel en skills, carruseles, animaciones al hacer scroll, partículas, antetítulos en mayúsculas y afirmaciones sin respaldo.

## Datos que NO se publican

El teléfono y los PDF originales de `contexto/`. El email es público por decisión del autor.
