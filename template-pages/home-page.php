<?php
/*
Template Name: Головна сторінка
*/

get_header();

$bg = get_field('home_bg');
?>

<main class="home">

  <?php if ($bg) : ?>
    <div class="home__background">
      <img src="<?php echo $bg; ?>" alt="<?= get_the_title(); ?>">
    </div>
  <?php endif; ?>

  <?php get_template_part('template-parts/banner'); ?>

  <?php get_template_part('template-parts/posts'); ?>

</main>

<?php get_footer(); ?>