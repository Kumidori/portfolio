import React from 'react';

function Smoothie(props) {
    return (
        <div className="smoothie animated bounceIn">
        <span dangerouslySetInnerHTML={{__html: `<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:se=\"http://svg-edit.googlecode.com\"\n" +
        "                                           xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n" +
        "                                           xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n" +
        "                                           xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" width=\"153\" height=\"283\">\n" +
        "            <rect id=\"backgroundrect\" width=\"100%\" height=\"100%\" x=\"0\" y=\"0\" fill=\"none\" stroke=\"none\"/>\n" +
        "            <g class=\"currentLayer\" style=\"\">\n" +
        "                <title>Layer 1</title>\n" +
        "                <path fill=\"none\" stroke=\"#222222\" stroke-width=\"4\" stroke-linejoin=\"round\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" marker-start=\"\" marker-mid=\"\" marker-end=\"\" id=\"svg_4\"\n" +
        "                      d=\"M15.26361274876433,281.2789792501251 L37.97194827930559,108.67055693235392 L113.66640411190804,108.67055693235392 L136.3747315141968,281.2789792501251 L15.26361274876433,281.2789792501251 z\"\n" +
        "                      style=\"color: rgb(0, 0, 0);\" class=\"\"\n" +
        "                      transform=\"rotate(-179.95616149902344 75.81918334960938,194.9747619628906) \"/>\n" +
        "\n" +
        "                <path fill=${props.fill} stroke=\"#222222\" stroke-width=\"5\" stroke-linejoin=\"round\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" marker-start=\"\" marker-mid=\"\" marker-end=\"\"\n" +
        "                      d=\"M21.74583005759206,280.27841583458564 L41.94115621294236,160.1741822379081 L109.25891367848612,160.1741822379081 L129.45423260509398,280.27841583458564 L21.74583005759206,280.27841583458564 z\"\n" +
        "                      style=\"color: rgb(0, 0, 0);\" class=\"smoothie-fill\"\n" +
        "                      transform=\"rotate(-179.95616149902344 75.60003662109375,220.22630310058594) \" id=\"svg_1\"\n" +
        "                      fill-opacity=\"1\"\n" +
        "                />\n" +
        "\n" +
        "                <path fill=\"none\" stroke=\"#222222\" stroke-width=\"4\" stroke-linejoin=\"round\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" marker-start=\"\" marker-mid=\"\" marker-end=\"\" id=\"svg_8\"\n" +
        "                      d=\"M1.9999878884791542,108.12334346795703 L29.916677387442178,87.01222909543208 L122.9723140469905,87.01222909543208 L150.88899355341346,108.12334346795703 L1.9999878884791542,108.12334346795703 z\"\n" +
        "                      style=\"color: rgb(0, 0, 0);\" class=\"\"/>\n" +
        "                <path fill=\"#4a90d6\" fill-opacity=\"1\" stroke=\"#222222\" stroke-opacity=\"1\" stroke-width=\"4\"\n" +
        "                      stroke-dasharray=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" opacity=\"1\" marker-start=\"\" marker-mid=\"\" marker-end=\"\"\n" +
        "                      d=\"M93.00491034189884,85.44444671383607 L93.00491034189884,33.77777867847014 \" id=\"svg_11\" class=\"\"/>\n" +
        "                <path fill=\"#4a90d6\" fill-opacity=\"1\" stroke=\"#222222\" stroke-opacity=\"1\" stroke-width=\"4\"\n" +
        "                      stroke-dasharray=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" opacity=\"1\" marker-start=\"\" marker-mid=\"\" marker-end=\"\"\n" +
        "                      d=\"M93.00491034189884,85.44444671383607 L93.00491034189884,33.77777867847014 \" class=\"\" id=\"svg_2\"/>\n" +
        "                <path fill=\"#4a90d6\" fill-opacity=\"1\" stroke=\"#222222\" stroke-opacity=\"1\" stroke-width=\"4\"\n" +
        "                      stroke-dasharray=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" opacity=\"1\" marker-start=\"\" marker-mid=\"\" marker-end=\"\"\n" +
        "                      d=\"M98.56046604462637,85.4444468363042 L98.56046604462637,36.00000055221018 \" id=\"svg_13\" class=\"\"/>\n" +
        "                <path fill=\"#4a90d6\" fill-opacity=\"1\" stroke=\"#222222\" stroke-opacity=\"1\" stroke-width=\"4\"\n" +
        "                      stroke-dasharray=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" opacity=\"1\" marker-start=\"\" marker-mid=\"\" marker-end=\"\"\n" +
        "                      d=\"M92.44935475985233,34.888889830789395 L126.33824454649016,1.0000000441515624 \" id=\"svg_15\" class=\"\"/>\n" +
        "                <path fill=\"#4a90d6\" fill-opacity=\"1\" stroke=\"#222222\" stroke-opacity=\"1\" stroke-width=\"4\"\n" +
        "                      stroke-dasharray=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" opacity=\"1\" marker-start=\"\" marker-mid=\"\" marker-end=\"\"\n" +
        "                      d=\"M98.06046803908578,37.757574039765984 L130.2826884088861,5.53535366996568 \" id=\"svg_17\" class=\"\"/>\n" +
        "                <path fill=\"#4a90d6\" fill-opacity=\"1\" stroke=\"#222222\" stroke-opacity=\"1\" stroke-width=\"4\"\n" +
        "                      stroke-dasharray=\"none\" stroke-linejoin=\"round\" stroke-linecap=\"butt\" stroke-dashoffset=\"\"\n" +
        "                      fill-rule=\"nonzero\" opacity=\"1\" marker-start=\"\" marker-mid=\"\" marker-end=\"\"\n" +
        "                      d=\"M129.92410112304685,7.343430532836916 L125.7826911230469,3.202020532836915 \" id=\"svg_19\" class=\"\"/>\n" +
        "            </g>\n" +
        "        </svg>`}} />
        <p>{props.title}</p>
        </div>
    );
}

export default Smoothie;
