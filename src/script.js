function uploadFiles() {
    var imageFile = document.getElementById("imageUpload").files[0];
    var videoFile = document.getElementById("videoUpload").files[0];

    if (!imageFile && !videoFile) {
        alert("画像または映像を選択してください。");
        return;
    }

    var formData = new FormData();
    if (imageFile) {
        formData.append("image", imageFile, imageFile.name);
    }
    if (videoFile) {
        formData.append("video", videoFile, videoFile.name);
    }

    // サーバーへの非同期アップロードの実装（省略）

    // GitHub Pagesではサーバーサイドの処理はできませんので、実際のアップロード処理は行えません。
}
