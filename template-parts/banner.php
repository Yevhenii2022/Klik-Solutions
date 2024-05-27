<?php
$title = get_field('banner_title') ?? '';
$subtitle = get_field('banner_subtitle') ?? '';
$btn_text = get_field('banner_btn_text') ?? '';
?>

<section class="banner">
    <div class="container">
        <div class="banner__wrapper">

            <?php if ($title) : ?>
                <h1 class="banner__title title anim-title _anim-items"><?= $title ?></h1>
            <?php endif; ?>

            <?php if ($subtitle) : ?>
                <p class="banner__subtitle anim-title _anim-items"><?= $subtitle ?></p>
            <?php endif; ?>

            <?php if ($btn_text) : ?>
                <div class="anim-title _anim-items">
                    <a href="<?php echo get_home_url(); ?>" class="button" aria-label='link to home page'>
                        <p><?= $btn_text ?></p>
                    </a>
                </div>
            <?php endif; ?>

        </div>
    </div>
</section>