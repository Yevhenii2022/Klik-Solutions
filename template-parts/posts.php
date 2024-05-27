<?php
$title = get_field('posts_title') ?? '';
?>

<section class="posts">
  <div class="container">
    <div class="posts__wrapper">

      <?php if ($title) : ?>
        <h2 class="posts__title title anim-title _anim-items"><?= $title ?></h2>
      <?php endif; ?>

      <?php
      $args = array(
        'post_type' => 'publications',
        'posts_per_page' => -1,
        'order' => 'ASC',
      );
      $publications_query = new WP_Query($args);
      if ($publications_query->have_posts()) :
      ?>
        <ul class="posts__list">
          <?php
          while ($publications_query->have_posts()) : $publications_query->the_post();
          ?>

            <?php get_template_part('template-parts/publication-card'); ?>

          <?php endwhile;
          wp_reset_postdata();
          ?>
        </ul>
      <?php endif; ?>

    </div>
  </div>
</section>