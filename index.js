$(document).ready(function() {
  var targetImage;
  var featherEditor = new Aviary.Feather({
        apiKey: '83a45835af9f4000939ce3abddcf48d8',
        onSave: function(imageID, newURL) {
            targetImage.src = newURL;
            featherEditor.close();
        }
    });

    $("#edit").click(function() {
      targetImage = $('#img')[0];
      launchEditor(targetImage.id, targetImage.src)
    })

    function launchEditor(id, src) {
        featherEditor.launch({
            image: id,
            url: src
        });
        return false;
    }

})
