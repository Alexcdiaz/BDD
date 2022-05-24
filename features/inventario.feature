Feature: Actualización de inventario
  La máquina actualizará el inventario tras cada compra

  Scenario Outline: Inventario
    Given Producto solicitado "<codigo>"
    And Stock "<inventario>"
    When Realiza compra
    Then Muestra "<mensaje>"

    Examples:
      | codigo     | inventario | mensaje                       |
      | A15        | 8          | Bebida azucarada entregada    |
      | B60        | 12         | Agua entregada                |
      | C6         | 1          | Papas fritas entregadas       |
      | A15        | 0          | Producto sin stock            |
      | C6         | 0          | Producto sin stock            |