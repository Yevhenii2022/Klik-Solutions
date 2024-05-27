<?php

function publications_custom_post()
{
  register_taxonomy('publication-type', ['publications'], [
    'label' => '',
    'labels' => [
      'name' => 'Категорія',
      'singular_name' => 'Категорії',
      'search_items' => 'Знайти Категорію',
      'all_items' => 'Всі Категорії',
      'view_item' => 'Переглянути Категорію',
      'parent_item' => 'Батьківська Категорія',
      'parent_item_colon' => 'Батьківська Категорія:',
      'edit_item' => 'Редагувати Категорію',
      'update_item' => 'Оновити Категорію',
      'add_new_item' => 'Додати нову категорію',
      'new_item_name' => 'Нова Категорія',
      'menu_name' => 'Категорії',
      'back_to_items' => '← Назад до Категорій',
    ],
    'description' => '',
    'public' => true,
    'hierarchical' => true,
    'rewrite' => array(
      'slug' => 'publications',
      'with_front' => true,
      'hierarchical' => false,
    ),
    'capabilities' => array(),
    'meta_box_cb' => 'post_categories_meta_box',
    'show_admin_column' => false,
    'show_in_rest' => null,
    'rest_base' => null,
  ]);

  $labels = array(
    'name' => esc_html__('Публікації', 'pointer_theme'),
    'singular_name' => esc_html__('Публікація', 'pointer_theme'),
    'add_new' => esc_html__('Додати нову публікацію', 'pointer_theme'),
    'add_new_item' => esc_html__('Додати нову публікацію', 'pointer_theme'),
    'edit_item' => esc_html__('Редагувати публікацію', 'pointer_theme'),
    'new_item' => esc_html__('Нова публікація', 'pointer_theme'),
    'all_items' => esc_html__('Всі публікації', 'pointer_theme'),
    'view_item' => esc_html__('Переглянути публікацію', 'pointer_theme'),
    'search_items' => esc_html__('Знайти публікацію', 'pointer_theme'),
    'not_found' => esc_html__('Публікацій не знайдено', 'pointer_theme'),
    'featured_image' => esc_html__('Зображення', 'pointer_theme'),
    'set_featured_image' => esc_html__('Додати зображення', 'pointer_theme')
  );
  $args = array(
    'labels' => $labels,
    'description' => 'Публікації',
    'public' => true,
    'menu_position' => 15,
    'show_in_rest' => true,
    'supports' => array('title', 'thumbnail'),
    'has_archive' => false,
    'show_in_admin_bar' => true,
    'show_in_nav_menus' => true,
    'rewrite' => array('slug' => 'publications'),
    'menu_icon' => 'dashicons-feedback',
    'publicly_queryable' => false,
    'query_var' => true,
    'taxonomies' => array('publication-type')
  );

  register_post_type('publications', $args);
}

add_action('init', 'publications_custom_post');
