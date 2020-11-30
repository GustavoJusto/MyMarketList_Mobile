function Limpar()
{
  $("#nome").val("");
  $("#senha").val("");
  $("#idade").val("");
}

$(document).on("click","#cada",function()
{
  var login = $("#nome").val();
  var senha = $("#senha").val();
  var idade = $("#idade").val();

  Limpar();
  alert("Implementar cadastro de usuario com o banco");

});

