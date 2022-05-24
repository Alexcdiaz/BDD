Feature: Despachar producto
  La máquina distribuirá el producto si el dinero es suficiente

  Scenario Outline: Producto indicado
    Given Producto "<codigo>"
    And Total "<dinero>"
    When Pregunta por el producto
    Then Despacha "<producto>"

    Examples:
      | codigo  | dinero    | producto          |
      | A15     | 50        | Bebida azucarada  |
      | A15     | 10        | Dinero incompleto |
      | B60     | 40        | Dinero incompleto |
      | B60     | 90        | Agua              |
      | C6      | 70        | Dinero incompleto |
      | C6      | 180       | Papas fritas      |