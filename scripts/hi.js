module.exports = (robot) ->
  robot.hear /ola/i, (res) ->
    # your code here
    res.send "Oi :D"

  robot.respond /tudo bem/i, (res) ->
    res.reply "Sim, e com vc chapa!"
