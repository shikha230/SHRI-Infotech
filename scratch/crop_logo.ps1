Add-Type -AssemblyName System.Drawing

# Process logo.jpeg
$filePath = "c:\Users\ITC\Desktop\shri info tech2\shri-infotech\src\assets\logo.jpeg"
$bmp = [System.Drawing.Bitmap]::FromFile($filePath)

$minX = $bmp.Width; $maxX = 0; $minY = $bmp.Height; $maxY = 0
$searchWidth = [int]($bmp.Width * 0.48)

for ($x = 0; $x -lt $searchWidth; $x += 2) {
    for ($y = 0; $y -lt $bmp.Height; $y += 2) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -lt 240 -or $pixel.G -lt 240 -or $pixel.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$w = $maxX - $minX
$h = $maxY - $minY
$dim = [Math]::Max($w, $h) + 12

$centerX = [int](($minX + $maxX) / 2)
$centerY = [int](($minY + $maxY) / 2)

$cropX = [Math]::Max(0, $centerX - [int]($dim / 2))
$cropY = [Math]::Max(0, $centerY - [int]($dim / 2))

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $dim, $dim)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)

# Save high-res square icon
$fav = New-Object System.Drawing.Bitmap(180, 180)
$g = [System.Drawing.Graphics]::FromImage($fav)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.DrawImage($cropped, 0, 0, 180, 180)
$fav.Save("c:\Users\ITC\Desktop\shri info tech2\shri-infotech\public\logo-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$fav.Save("c:\Users\ITC\Desktop\shri info tech2\shri-infotech\public\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Ico)

$g.Dispose()
$fav.Dispose()
$bmp.Dispose()
$cropped.Dispose()

# Process white-logo.png for dark favicon
$filePath2 = "c:\Users\ITC\Desktop\shri info tech2\shri-infotech\src\assets\white-logo.png"
$bmp2 = [System.Drawing.Bitmap]::FromFile($filePath2)

$minX2 = $bmp2.Width; $maxX2 = 0; $minY2 = $bmp2.Height; $maxY2 = 0
$searchWidth2 = [int]($bmp2.Width * 0.48)

for ($x = 0; $x -lt $searchWidth2; $x += 3) {
    for ($y = 0; $y -lt $bmp2.Height; $y += 3) {
        $pixel = $bmp2.GetPixel($x, $y)
        if ($pixel.A -gt 30) {
            if ($x -lt $minX2) { $minX2 = $x }
            if ($x -gt $maxX2) { $maxX2 = $x }
            if ($y -lt $minY2) { $minY2 = $y }
            if ($y -gt $maxY2) { $maxY2 = $y }
        }
    }
}

if ($maxX2 -gt $minX2) {
    $w2 = $maxX2 - $minX2
    $h2 = $maxY2 - $minY2
    $dim2 = [Math]::Max($w2, $h2) + 20

    $centerX2 = [int](($minX2 + $maxX2) / 2)
    $centerY2 = [int](($minY2 + $maxY2) / 2)

    $cropX2 = [Math]::Max(0, $centerX2 - [int]($dim2 / 2))
    $cropY2 = [Math]::Max(0, $centerY2 - [int]($dim2 / 2))

    $rect2 = New-Object System.Drawing.Rectangle($cropX2, $cropY2, $dim2, $dim2)
    $cropped2 = $bmp2.Clone($rect2, $bmp2.PixelFormat)

    $fav2 = New-Object System.Drawing.Bitmap(180, 180)
    $g2 = [System.Drawing.Graphics]::FromImage($fav2)
    $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g2.DrawImage($cropped2, 0, 0, 180, 180)
    $fav2.Save("c:\Users\ITC\Desktop\shri info tech2\shri-infotech\public\logo-white-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)

    $g2.Dispose()
    $fav2.Dispose()
    $cropped2.Dispose()
}

$bmp2.Dispose()

Write-Host "Both favicons generated successfully!"
