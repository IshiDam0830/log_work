---
tags:
  - ドメイン
---

<?php // #33611 ?banner_id=1060_rtg_ (以下ページ固有)のときマラドーナ遷移時にそのままパラメータを引き継いで渡す
if(isset($banner_id) && preg_match('/1060_rtg_/', $banner_id)): ?>
	<input type="hidden" name="banner_id" value="<?php echo $banner_id; ?>">
<?php endif; ?>

<?php if($is_post_banner_id): ?><input type="hidden" name="banner_id" value="<?php echo $banner_id; ?>"><?php endif; ?>


https://www.onamae.local:58078/campaign/trial3/?mail&banner_id=1060_rtg_111