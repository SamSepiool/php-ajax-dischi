    <div class="covers_box">
    <?php foreach ($database as $item): ?>

        <div class="canvas">
            <img src="<?=$item['poster']?>" alt="<?=$item['title']?>">
            <div class="info">
                <h2><?=$item['title']?></h2>
                <p><?=$item['author']?></p>
                <p><?=$item['year']?></p>
            </div>
        </div>

    <?php endforeach ?>    
</div>
        
        
