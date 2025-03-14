
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) => {
    // console.log(videos)
    const videoCardContainer = document.getElementById("video-card-container");
    videos.forEach(video => {
        // console.log(video)
        let hidden = ""
        if(!video.authors[0].verified){
            hidden = "hidden"
        }
        const videoCard = document.createElement("div");
        // videoCard.classList.add()
        videoCard.innerHTML = `
        <div class="">
            <img class="rounded-xl w-full max-h-[200px] object-cover" src="${video.thumbnail}" alt="">
        </div>
        <div class="flex mt-5 gap-4">
            <div class="">
                <img class="w-10 h-10 object-cover rounded-full" src="${video.authors[0].profile_picture}" alt="">
            </div>
            <div class="flex flex-col">
                <h3 class="font-bold">${video.title}</h3>
                <p class="text-gray-500 flex gap-3">${video.authors[0].profile_name} <img class="w-5 h-5 ${hidden}" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""> </p>
                <p class="text-gray-500">${video.others.views} views</p>
            </div>
        </div>
        `
        videoCardContainer.appendChild(videoCard)
        console.log(video.authors[0].verified)

    });
}

loadVideos()