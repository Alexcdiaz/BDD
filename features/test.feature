# Feature: ¿Aún no es viernes?
#   Todos quieren saber cuando es viernes

#   Scenario Outline: Viernes es Viernes
#     Given hoy es "<dia>"
#     When Pregunto si ya es viernes
#     Then Debería decir "<respuesta>"

#     Examples:
#       | dia            | respuesta |
#       | Viernes        | TGIF      |
#       | Domingo        | Nope      |
#       | Lunes          | Nope      |