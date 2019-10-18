---
tags:
  - アクセス
---

ページのカテゴリーとナビカテゴリーが同じ時にSP時のみカテゴリーに下線を引きたい



<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title><?php bloginfo("name"); ?></title>
	<meta name="description" content="<?php bloginfo('description' ); ?>">

	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/style.css">
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/libs/jquery.min.js"></script>
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/script.js"></script>

	<?php get_template_part('inc', 'pid'); ?>
	<?php get_template_part('tag', 'head-top'); ?>
	<?php get_template_part('tag', 'head-bottom'); ?>
	<?php wp_head(); ?>
</head>
<body>
	<?php get_template_part('tag', 'body-top'); ?>
	<?php
		$args = array(
			'hide_empty'	=> 0,
			'parent'		=> 0,
		);
		$categories = get_categories($args);
		$current_category = get_queried_object();
		$current_category_name = $current_category->category_nicename;
		
	?>

	<header class="header">
		<div class="header-inner inner clearfix">
			<p class="header-caption">GMOとくとくBB通信｜インターネット・Wi-Fiに関する最新情報をお届け</p>
			<div class="header-nav">
				<ul class="list-nav">
					<li class="list-nav-item is-home"><a href="<?php echo home_url(); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="とくとくBB通信"></a></li>
				<?php foreach($categories as $category): ?>
					<?php
						$categoryName = $category->name;
						$categorySlug = $category->category_nicename;
						$category_css = ($categorySlug == $current_category_name)? ' has-border' : '';

					?>
					<li class="list-nav-item<?php echo $category_css?>">
							<?php echo '$categoryName: '.$categoryName.', $current_category_name : '.$current_category_name.', $categorySlug : '.$categorySlug; ?>
						<a href="<?php echo get_category_link($category->term_id); ?>"><?php echo $categoryName; ?></a>
					</li>
				<?php endforeach ?>
				</ul>
			</div>
			<div class="header-search">
				<?php get_search_form(); ?>
			</div>
		</div>
	</header>