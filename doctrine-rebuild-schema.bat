rmdir /Q /S temp\cache
php www/index.php orm:schema-tool:drop --force
php www/index.php orm:schema-tool:create
php www/index.php data-fixtures:load
rmdir /Q /S temp\cache
