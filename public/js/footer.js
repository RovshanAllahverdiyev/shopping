const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
           
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
           
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum veritatis rem doloremque. Quos molestiae, officiis molestias ut repellat reiciendis nesciunt earum consequatur non nobis laboriosam quod iure quisquam. Laboriosam recusandae quae autem error tempore, mollitia quaerat ad eaque dolore illo odit, dolores voluptates necessitatibus natus at. Sit officiis cum iure alias blanditiis possimus natus et amet, dolor error atque, aspernatur expedita. Eligendi, assumenda. Similique quidem iste molestiae reiciendis a veritatis officia magni provident? Similique molestias, repudiandae id labore assumenda consequuntur eius consectetur! Ut nihil dolorem ipsa quisquam laborum autem earum magnam, sapiente nemo quod unde, accusamus soluta? Recusandae, consectetur odio.</p>
<p class="info">support emails - allakhverdievrovshann@gmail.com, customersupport@clothing.com</p>
<p class="info">phone - +994(55)423-33-53</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Clothing,Best,apparels online store</p>
    `;
};

createFooter()