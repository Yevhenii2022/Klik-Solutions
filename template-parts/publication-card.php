<?php
$time_text = get_field('time_text') ?? '';
$title = get_field('publications_title') ?? '';
$text = get_field('publications_text') ?? '';
$link_text = get_field('publications_link_text') ?? '';
?>

<li class="publication anim-card _anim-items">
  <a href="<?php the_permalink() ?>" aria-label="<?php the_title_attribute(); ?>">
    <article>

      <div>
        <div class="publication__top">
          <?php
          $icon = get_field('publications_icon');
          $file_path = get_attached_file($icon);

          if ($file_path && file_exists($file_path)) {
            $svg_content = file_get_contents($file_path);
          } else {
            $svg_content = false;
          }
          ?>
          <?php if ($svg_content !== false) : ?>
            <?php echo $svg_content; ?>
          <?php endif; ?>

          <h3><?= get_the_title(); ?></h3>
        </div>

        <?php if (has_post_thumbnail()) : ?>
          <div class="publication__img">
            <img src="<?= get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
          </div>
        <?php endif; ?>

        <div class="publication__box">
          <?php
          $color = get_field('publications_badge') ?? '';
          $category = get_the_terms(get_the_ID(), 'publication-type')[0] ?? null;
          if ($category) {
            $class = '';
            if ($color === 'grey') {
              $class = 'publication__category--grey';
            } elseif ($color === 'yellow') {
              $class = 'publication__category--yellow';
            } elseif ($color === 'blue') {
              $class = 'publication__category--blue';
            }

            echo '<div class="publication__category ' . esc_attr($class) . '">
                <span>' . esc_html($category->name) . '</span>
              </div>';
          }
          ?>

          <?php
          $icon = get_field('time_icon');
          $file_path = get_attached_file($icon);

          if ($file_path && file_exists($file_path)) {
            $svg_content = file_get_contents($file_path);
          } else {
            $svg_content = false;
          }
          ?>
          <?php if ($svg_content !== false) : ?>
            <?php echo $svg_content; ?>
          <?php endif; ?>

          <?php if ($time_text) : ?>
            <p>
              <?= $time_text ?>
            </p>
          <?php endif; ?>
        </div>

        <?php if ($title) : ?>
          <h4 class="publication__title">
            <?= $title ?>
          </h4>
        <?php endif; ?>
      </div>

      <div>
        <?php if ($text) : ?>
          <p class="publication__text">
            <?= $text ?>
          </p>
        <?php endif; ?>

        <?php if ($link_text) : ?>
          <div class="publication__link button">
            <p><?= $link_text ?></p>
          </div>
        <?php endif; ?>
      </div>

    </article>
  </a>
</li>