Feature: end to end

    End to End Ecommerce

    Scenario: User successfully purchase product
    Given User Open Ecommerce Page
    When User Submit Data
    And User go to shop page
    And User add item to cart
    And checkout the item
    Then User succesfully checkout 