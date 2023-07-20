// Menu toggle 
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
	nav.classList.toggle('slide');
})


// Calculator BMI

document.getElementById("bmi-form").addEventListener("submit", (event) => {
  event.preventDefault();
  calculateBMI();
});

const calculateBMI = () => {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById("age").value);
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);

    const bmi = weight / ((height / 100) ** 2);

    let category = "";
    let categoryDescription = "";
    let riskDescription = "";

    if (bmi < 18.5) {
        category = "Underweight";
        categoryDescription = "Underweight";
        riskDescription = "Perbanyak asupan makanan bergizi dan konsultasikan dengan ahli gizi untuk peningkatan berat badan.";

        const diseases = [
            "Anemia",
            "Osteoporosis",
            "Gangguan pertumbuhan",
            "Gangguan reproduksi"
        ];

        riskDescription += "<br><br>Ada beberapa resiko penyakit yaitu: " + diseases.join(", ");
    } else if (bmi >= 18.5 && bmi < 24.99) {
        category = "Ideal";
        categoryDescription = "Ideal";
        riskDescription = "Jika BMI Anda berada dalam kategori ini maka Anda memiliki berat badan yang sehat sehingga tidak ada resiko penyakit. Lanjutkan gaya hidup sehat dengan pola makan seimbang dan olahraga teratur.";
    } else if (bmi >= 25 && bmi < 29.99) {
        category = "Obese";
        categoryDescription = "Obese";
        riskDescription = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal. Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.";

        const diseases = [
            "Hipertensi",
            "Kolesterol tinggi",
            "Jantung koroner",
            "Stroke",
            "Diabetes melitus",
            "Kanker",
            "Gangguan pernapasan",
            "Gangguan reproduksi"
        ];

        riskDescription += "<br><br>Ada beberapa resiko penyakit yaitu: " + diseases.join(", ");
    } else if (bmi >= 30) {
        category = "Extremely Obese";
        categoryDescription = "Extremely Obese";
        riskDescription = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mengurangi berat badan hingga batas normal. Segera konsultasikan dengan ahli gizi untuk penurunan berat badan yang sehat.";

        const diseases = [
            "Hipertensi",
            "Kolesterol tinggi",
            "Jantung koroner",
            "Stroke",
            "Diabetes melitus",
            "Kanker",
            "Gangguan pernapasan",
            "Gangguan reproduksi"
        ];

        riskDescription += "<br><br>Ada beberapa resiko penyakit yaitu: " + diseases.join(", ");
    }

    let result = `Your BMI: ${bmi.toFixed(2)}`;
    document.getElementById("result").textContent = result;

    document.getElementById("category-description").textContent = categoryDescription;

    const riskDescriptionElement = document.getElementById("risk-description");
    riskDescriptionElement.innerHTML = `
        <div>
            ${riskDescription}
        </div>
    `;

    document.getElementById("category-description").style.display = "block";
    document.getElementById("risk-description").style.display = "grid";
};

document.getElementById("bmi-form").addEventListener("reset", () => {
    document.getElementById("result").textContent = "";
    document.getElementById("category-description").textContent = "";
    document.getElementById("risk-description").innerHTML = "";

    document.getElementById("category-description").style.display = "none";
    document.getElementById("risk-description").style.display = "none";
});
