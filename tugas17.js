function upperlow(){
  var kalimat1 = "Saya beLajar bahaSa peMograman deNgan khUsuk";
  var kalimat2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual"
  console.log(kalimat1.toLowerCase());
  console.log(kalimat1.toUpperCase());
  console.log(kalimat2.toLowerCase());
  console.log(kalimat2.toUpperCase());
}
function kode_ascii(){
  var ipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  console.log(ipsum.charCodeAt(0),'-',ipsum.charCodeAt(1),'-',ipsum.charCodeAt(2),'-',ipsum.charCodeAt(3),'-',ipsum.charCodeAt(4),'-',ipsum.charCodeAt(5));
}
upperlow()
kode_ascii()
