let slideIndex = 1
showSlides(slideIndex)
//ประกาศตัวแปร slideIndex เป็นเลข 1 (เริ่มต้นแสดงสไลด์หมายเลข 1)
//เรียกฟังก์ชัน showSlides(slideIndex) เพื่อแสดงสไลด์แรกตอนโหลดหน้าเว็บ

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}
//ฟังก์ชัน plusSlides(n) ใช้สำหรับ เลื่อนไปสไลด์ถัดไปหรือก่อนหน้า
//slideIndex += n คือเพิ่มหรือลดค่าของ slideIndex
//ถ้า n เป็น 1 → ไปสไลด์ถัดไป
//ถ้า n เป็น -1 → ไปสไลด์ก่อนหน้า
//เรียก showSlides(...) เพื่ออัปเดตการแสดงผล

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}
//ฟังก์ชัน currentSlide(n) ใช้สำหรับ เลือกสไลด์โดยตรง(เช่นคลิกที่จุด dot หรือ thumbnail)
//กำหนด slideIndex = n เพื่อบอกว่าจะแสดงสไลด์หมายเลขไหน
//เรียก showSlides(...) เพื่อแสดงสไลด์นั้นทันที

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot")
    //ประกาศตัวแปร i ไว้ใช้ในลูป
    //slides เก็บ Element HTML ทั้งหมดที่มี class "mySlides" (แต่ละรูปสไลด์)
    //dots เก็บ Element HTML ที่มี class "dot" (จุดบอกตำแหน่งสไลด์)

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    //ถ้าหมายเลขสไลด์ (n) มากกว่าจำนวนสไลด์ทั้งหมด → กลับไปสไลด์แรก
    //ถ้าหมายเลขสไลด์ น้อยกว่า 1 → กลับไปสไลด์สุดท้าย
    //(ทำให้เลื่อนวนได้)

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    //วนลูปซ่อนทุกสไลด์ (display = "none")

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    //วนลูปเอาคำว่า " active" ออกจาก className ของทุก dot
    // (เพื่อรีเซ็ตสถานะ active ก่อนที่จะตั้งค่าใหม่)

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
    // แสดงสไลด์ปัจจุบัน(slideIndex - 1 เพราะ array index เริ่มจาก 0)
    //เพิ่ม " active" ให้ dot ปัจจุบัน เพื่อทำให้เป็นจุดสีแสดงว่ากำลังดูสไลด์นี้
}