// Open the modal with the selected event's images
function openModal(eventId) {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-content");

    // Clear previous content
    modalContent.innerHTML = "";

    // Add images to the modal
    var images = [];
    if (eventId === 'event1') {
        images = [
            { src: "1.jpg", alt: "Event 1 Image 1" },
            { src: "2.jpg", alt: "Event 1 Image 2" },
            { src: "3.jpg", alt: "Event 1 Image 3" }
        ];
    } else if (eventId === 'event2') {
        images = [
            { src: "event2_image1.jpg", alt: "Event 2 Image 1" },
            { src: "event2_image2.jpg", alt: "Event 2 Image 2" },
            { src: "event2_image3.jpg", alt: "Event 2 Image 3" }
        ];
    } else if (eventId === 'event3') {
        images = [
            { src: "event3_image1.jpg", alt: "Event 3 Image 1" },
            { src: "event3_image2.jpg", alt: "Event 3 Image 2" },
            { src: "event3_image3.jpg", alt: "Event 3 Image 3" }
        ];
    }

    // Create and append image elements to the modal content
    images.forEach(function(image) {
        var imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        modalContent.appendChild(imgElement);
    });

    // Display the modal
    modal.style.display = "block";
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
