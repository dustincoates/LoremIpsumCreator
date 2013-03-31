lorem(count, text) ->
  theWell = text.split(" ")
  output = []
  wordCounter = 0
  if isNaN(count)
    count = parseInt(count, 10)
    if isNaN(count)
      return "You must specify a number"

