<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Sterling
 */

get_header(); ?>

	<div id="primary" class="content-area">
            
		<main id="main" class="site-main">
                    
                    <div class="container" id="page-container">
                        
                        <div class="row">
                            
                            <div class="col-md-<?php sterling_get_container_width(); ?> page-title">
                            
                                <?php while ( have_posts() ) : the_post(); ?>

                                    <h1><?php the_title(); ?></h1>
                                    
                                    <div id="page-title-img" style="background-image: url( <?php the_post_thumbnail_url(); ?> ">
                                            <?php the_post_thumbnail(); ?>
                                    </div>
                                                                            
                                    <p><?php the_content(); ?></p>
                                
                                    <?php  // If comments are open or we have at least one comment, load up the comment template.
                                    if ( comments_open() || get_comments_number() ) :
                                            comments_template();
                                    endif;

                                endwhile; // End of the loop.  ?>
                                
                            </div>
                            
                            <div class="col-md-3" id="page-sidebar">
                                
                                <?php get_sidebar(); ?>
                                
                            </div>
                        
                        </div>    
                            
                    </div>
                    
		</main><!-- #main -->
                
	</div><!-- #primary -->

<?php

get_footer();
