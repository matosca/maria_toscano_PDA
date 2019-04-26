require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2.rb')

class TestCardGame < MiniTest::Test

  def setup
    @card1 = Card.new("Diamonds", 1)
    @card2 = Card.new("Clubs", 7)
    @cards = [@card1, @card2]

    @game = CardGame.new(@cards)
  end

  def test_check_for_ace__true()
    result = @game.check_for_ace(@card1)
    assert_equal(true, result)
  end
  def test_check_for_ace__false()
    result = @game.check_for_ace(@card2)
    assert_equal(false, result)
  end
  def test_highest_card__win()
    @card1 = Card.new("Diamonds", 9)
    result = @game.highest_card(@card1, @card2)
    assert_equal(@card1, result)
  end

  def test_highest_card__lose()
    result = @game.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end
  def test_game_cards_total()
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 8", result)
  end
end
