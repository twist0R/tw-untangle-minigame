<!-- Example how to use the export. -->

RegisterCommand('tanglehackhard', function()
  exports['tw-untangle-minigame']:OpenUntangleGame(function(action)
    print(action)
    if action == 'failed' then
      print('Minigame Failed')
    else
      print('Minigame Sucess')
    end
  end, HOW MANY CIRCLES U WANT)
end)
 
if you change the UI make sure to open the terminal and do the following.

[1] - cd web
[2] - npm i --force
[3] - npm run build
