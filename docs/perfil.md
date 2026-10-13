# Perfil y contenido de la web

Resumen curado a partir de `contexto/` (CV, TFG, TFM, notas) y del GitHub público.
Solo contiene datos aptos para publicar. Es el brief editorial del que salen los textos
ES/EN de `src/data/`. Si algo cambia, actualizar ambos.

## Identidad

- **Nombre:** Pedro Luis Soto Santos
- **Titular:** AI Engineer · Python (ES: Ingeniero de IA · Python)
- **Ubicación:** España. Abierto a reubicación en Europa.
- **Modalidad buscada:** híbrida o presencial.
- **Idiomas:** español (nativo), inglés (C1, Cambridge).
- **Contacto público:** pepoluis712@gmail.com · [GitHub](https://github.com/plss12) · [LinkedIn](https://www.linkedin.com/in/plss12/)

## Objetivo profesional

Puesto de ingeniero de IA centrado en Python en empresas tecnológicas innovadoras.
Ingeniero de software con máster en IA y más de dos años de experiencia en entornos
empresariales (datos y desarrollo), con especial interés en aprendizaje por refuerzo,
agentes y sistemas basados en LLMs.

## Formación

| Título | Centro | Fecha | Destacado |
| --- | --- | --- | --- |
| Máster Universitario en Inteligencia Artificial | Universidad Internacional de Valencia (VIU) | sep 2024 | Matrícula de Honor en el TFM (MADRL). Optativa de computación cuántica. |
| Grado en Ingeniería Informática – Ingeniería del Software | Universidad de Sevilla | jun 2023 | Matrícula de Honor en el TFG y en la asignatura de IA. Alumno interno del Dpto. de Ciencias de la Computación e IA. |

## Experiencia técnica

- **Data Engineer — Minsait (Indra)**, Sevilla · jun 2023 – feb 2025
  - Modernización de flujos de datos para un gran cliente bancario, sobre uno de los mayores entornos Oracle Big Data del mundo, dando soporte a modelos de riesgo basados en IA.
  - Diseño y optimización de pipelines ETL con Oracle Data Integrator y Python: **−50 % en tiempo de procesamiento**, garantizando la disponibilidad diaria para operaciones críticas.
- **Software Engineer — Deloitte**, Sevilla · ene 2023 – jun 2023
  - Seguimiento y coordinación de proyectos de desarrollo para el Ministerio de Sanidad: plazos, entregables y detección temprana de riesgos.
  - Toma de requisitos y traducción de necesidades del cliente en tareas para los equipos de desarrollo.

## Experiencia internacional

Periodo planificado para alcanzar un inglés avanzado y desarrollar habilidades de liderazgo.
En la web debe aparecer de forma breve y en positivo, como etapa deliberada y no como hueco.

- **Monitor en campamento de inmersión en inglés — InterWay**, España · feb 2026 – ago 2026
- **Front Office Assistant — Accor**, Brisbane (Australia) · mar 2025 – oct 2025

## Proyectos (orden propuesto)

1. **Lunar-Rover-MADRL** (TFM, Matrícula de Honor) — [repo](https://github.com/plss12/Lunar-Rover-MADRL)
   - Planificación de rutas multiagente con DRL para rovers lunares que recogen y transportan minerales, como alternativa a la planificación centralizada.
   - Simulador lunar propio con Gymnasium + Pygame (mapas, obstáculos y número de agentes configurables y aleatorios).
   - DDDQL (Double Dueling DQN) y MAPPO implementados desde cero.
   - Resultado: DDDQL resuelve los escenarios de prueba con rutas eficientes y **cero colisiones entre agentes**. MAPPO, on-policy, no converge ante la alta aleatoriedad del entorno, y el TFM analiza por qué.
   - Stack: Python, Gymnasium, Pygame, Keras/TensorFlow.
2. **Connect-X-AlphaZero** — [repo](https://github.com/plss12/Connect-X-AlphaZero)
   - Agentes para Conecta 4 en la competición ConnectX de Kaggle: **AlphaZero implementado desde cero, en el top 10 global**.
   - Comparativa con Rainbow DQN y PPO (Tianshou) y con MCTS/Minimax (sobre pyplAI). La búsqueda clásica supera al RL model-free puro.
   - Stack: Python, PyTorch, Tianshou.
3. **pyplAI** (TFG, Matrícula de Honor) — [repo](https://github.com/plss12/pyplAI) · [PyPI](https://pypi.org/project/pyplAI/)
   - Biblioteca open source publicada en PyPI (`pip install pyplAI`) con Minimax (poda alfa-beta), MCTS-UCT, SO-ISMCTS y MO-ISMCTS para juegos de información perfecta e imperfecta.
   - Batería de juegos de ejemplo (damas, Ultimate Tic-Tac-Toe, Stratego, escoba, blackjack, Phantom, Holjjak) y análisis estadístico comparativo.
   - Caso especial: algoritmo genético para la configuración inicial del Stratego, que mejora el rendimiento de SO-ISMCTS.
4. **Kaggle / ML aplicado** (bloque compacto)
   - [Store-Sales-TSF](https://github.com/plss12/Store-Sales-TSF): series temporales con un ensemble de XGBoost y LightGBM y feature engineering de lags y medias móviles. **Top 5 %**.
   - [Spaceship-AutoML](https://github.com/plss12/Spaceship-AutoML): pipeline end-to-end con AutoGluon. 81 % de accuracy, **top 2 %**.

## Skills (sin barras de nivel)

- **IA:** Machine Learning, Deep Learning, Reinforcement Learning (single y multiagente), Computer Vision, NLP, IA generativa, LLMs, RAG, MCP.
- **Python:** Pandas, NumPy, scikit-learn, PyTorch, TensorFlow/Keras, Gymnasium, XGBoost/LightGBM.
- **Datos:** SQL, PL/SQL, Oracle, MongoDB, ETL (ODI).
- **Ingeniería:** Git, Docker, Linux, CI/CD, AWS. Java como lenguaje secundario.
- **Metodología:** Agile/Scrum.

## Dirección de diseño y tono

- **Tono:** cercano y sencillo, sin caer en lo informal. Frases cortas y concretas, con cifras reales en lugar de adjetivos.
- **Estética:** básica pero eficaz. Pocos estímulos, sin animaciones llamativas ni efectos que distraigan del perfil. Lo que demuestra el nivel técnico es la calidad de la implementación (rendimiento, accesibilidad, tipografía, detalle), no los efectos.
- **Evitar:** barras de nivel en skills, foto, carruseles, cursores custom, partículas, scroll-jacking.
- **Bilingüe:** ES y EN con el mismo contenido, cambiables desde la cabecera.

## Datos que NO se publican

El teléfono y los PDF originales de `contexto/`. El email es público por decisión del autor.
