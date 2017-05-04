$(document).ready(function(){
        var ScriptEd = ["Zach", "Justin", "Aaron", "Alyxe", "Julia"];
        var Students = ["Zenebou", "Jennifer", "Kevin", "Darleny", "Bradley"];
    $("#studentButton").click(function() {
        var randomStudents = Math.floor(Math.random()*Students.length);
    $("#studentDisplay").append(Students[randomStudents]);
});
    $("#teacherButton").click(function() {
        var randomScriptEd = Math.floor(Math.random()*ScriptEd.length);
    $("#teacherDisplay").append(ScriptEd[randomScriptEd]);
});
})