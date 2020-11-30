function Limpar()
{
  $("#nome").val("");
  $("#senha").val("");
  $("#idade").val("");
}

$(document).on("click","#pp",function()
{
  var login = $("#nome").val();
  var senha = $("#senha").val();

  if(login == "admin" && senha == "123")
  {
    window.location.href='home.html';
  }
  else
  {
    alert("Implementar o login com o banco");
  }
  Limpar()
});


$(document).on("click","#cc",function()
{
    window.location.href='cadastrar.html';
});
