### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
# Corrections: The above require_relative path for 'card.rb' indicates that the class CardGame and Card are somehow joined and so the behaviour of the class Card will be passed down to the subclass CardGame. This creates a relationship of inheritance of properties and behaviours.

class CardGame
  # Correction 1: In order to inherits the properties and behaviours from the superclass Card to the subclass CardGame we need to use the less-than operator "<" (like, class CardGame < Card)

  # Correction 2: Class CardGame has not been "initialized" --def initialize()...end.

  # Correction 3: When "initializing" class CardGame, one parameter has to be passed and instantiated. This will store an array of two instance object of class Card -- def initialize(cards)
          # @cards = [card1, card2]
        # end --

  # Correction 4: After defining the function to initialize the class and passed the parameters, we need to make the instance objects hold inside the array readable by using attr_reader --attr_reader :card1, :card2.

  def checkforAce(card)
# Correction 5: The Ruby convention for naming functions is to use underscores rather than camelcase. They should start with lowercase letter or underscores and can consist of letters, underscores and/or digits. Also, Ruby functions can end with ?, !, or =.

    if card.value = 1
# Correction 6: In Ruby, one equal sign ("=") is used to assign values to variables. When comparing two values, two equal signs ("==") are used. So, in this if statement two values are being compared so "==" should be used instead.
# Also, when using if/if...else statement, it is highly recommended to write the condition to be evaluated between round brackets (or parentheses) for a much better readability.
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
# Correction 7: In Ruby, a function can be defined by starting with "def". So, we should replace "dif" in this piece of code for "def" instead.

  if card1.value > card2.value
# Correction 8: Again, when using if/if...else statement, it is highly recommended to write the condition to be evaluated between round brackets (or parentheses) for a much better readability.

    return card.name
# Correction 9: So, here there is an undefined method "name" (in card.name) for card. Ruby will not be able to return card.name because there has not been defined any method for name previously. In order to solve the problem. Also, a comparison between two values (card1.value and card2.value) is being evaluated in this function. This condition should return either card1 or card2 depending on statement being true or false. So card.name should be changed to card1 instead.

  else
    card2
# Correction 10: Missing return in this option --return card2.
  end
end
# Correction 11: This function is not indented properly. For readability convention, it should be indented accordingly.

end
# Correction 12: The above end is closing the class Card but leaving outside of it a function that calls self.cards_total(cards). So, the end should be placed just after the last method defined for this class.


def self.cards_total(cards)
  total
# Correction 13: Total is being used as variable in this function however it has not stored or set any value for it. So, at the moment, it does not have any functionality; total should be set to 0 since it is used to record the total values of cards, for each iteration in this "for...loop" a card value is being added and stored in total incrementing the previous value.

  for card in cards
    total += card.value
    return "You have a total of" + total
# Correction 14: The above "return" statement should be written outside the for loop; because, otherwise, the for...loop will evaluate the elements but it will always return the values for first element evaluated. Thus, we are not going to get the total amount (expected results).

# Correction 15: Also, in Ruby you can use string interpolation in order to print the result of a particular variables and avoid to much of string concatenation --return "You have a total of #{total}". It saves you time and it is more efficient.

  end
end


```
