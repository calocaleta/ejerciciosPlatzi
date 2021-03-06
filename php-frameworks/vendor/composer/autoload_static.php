<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5a091e62798e118fabc8776202c1f94a
{
    public static $files = array (
        '59d33575e19066115932e57b49969d66' => __DIR__ . '/../..' . '/app/helpers.php',
    );

    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5a091e62798e118fabc8776202c1f94a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5a091e62798e118fabc8776202c1f94a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5a091e62798e118fabc8776202c1f94a::$classMap;

        }, null, ClassLoader::class);
    }
}
