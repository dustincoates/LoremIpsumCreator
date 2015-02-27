# Unfinished, obviously
lorem(count, text) ->
  tempWell = text.split(" ")
  theWell = []
  output = []
  wordCounter = 0
  count = parseInt(count, 10) if isNAN(count)

  return "You must specify a number" if isNaN(count)

  for word in tempWell
    theWell.push(word) unless word in theWell
