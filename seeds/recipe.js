const Recipe = require('../models/recipe');

recipes = [
    {
        "name": "Easy Pea & Spinach Carbonara",
        "instructions": "1. Put 10 cups of water in a large pot and bring to a boil over high heat.\n2. Meanwhile, heat oil in a large skillet over medium-high heat. Add breadcrumbs and garlic; cook, stirring frequently, until toasted, about 2 minutes. Transfer to a small bowl and stir in 2 tablespoons Parmesan and parsley. Set aside.\n3. Whisk the remaining 6 tablespoons Parmesan, egg yolks, egg, pepper and salt in a medium bowl.\n4. Cook pasta in the boiling water, stirring occasionally, for 1 minute. Add spinach and peas and cook until the pasta is tender, about 1 minute more. Reserve 1/4 cup of the cooking water. Drain and place in a large bowl.\n5. Slowly whisk the reserved cooking water into the egg mixture. Gradually add the mixture to the pasta, tossing with tongs to combine. Serve topped with the reserved breadcrumb mixture.",
        "image": "/images/recipes/easy_pea_spinach_carbonara.webp",
        "calories": 430,
        "fat": 15,
        "carbs": 54,
        "protein": 20,
        "ingredients": [
            {
                "name": "Extra-virgin olive oil",
                "quantity": 1.5,
                "unit": "tablespoons"
            },
            {
                "name": "Panko breadcrumbs, preferably whole-wheat",
                "quantity": 0.5,
                "unit": "cup"
            },
            {
                "name": "Small clove garlic, minced",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Grated Parmesan cheese, divided",
                "quantity": 8,
                "unit": "tablespoons"
            },
            {
                "name": "Finely chopped fresh parsley",
                "quantity": 3,
                "unit": "tablespoons"
            },
            {
                "name": "Finely chopped fresh parsley",
                "quantity": 3,
                "unit": "tablespoons"
            },
            {
                "name": "Large egg yolks",
                "quantity": 3,
                "unit": "pieces"
            },
            {
                "name": "Large egg",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Ground pepper",
                "quantity": 0.5,
                "unit": "teaspoon"
            },
            {
                "name": "Package fresh tagliatelle or linguine",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Baby spinach",
                "quantity": 8,
                "unit": "cups"
            },
            {
                "name": "Peas (fresh or frozen)",
                "quantity": 1,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Chhole (Chickpea Curry)",
        "instructions": "1. Pulse serrano, garlic and ginger in a food processor until minced. Scrape down the sides and pulse again. Add onion; pulse until finely chopped, but not watery.\n2. Heat oil in a large saucepan over medium-high heat. Add the onion mixture and cook, stirring occasionally, until softened, 3 to 5 minutes. Add coriander, cumin and turmeric and cook, stirring, for 2 minutes.\n3. Pulse tomatoes in the food processor until finely chopped. Add to the pan along with salt. Reduce heat to maintain a simmer and cook, stirring occasionally, for 4 minutes. Add chickpeas and garam masala, reduce heat to a gentle simmer, cover and cook, stirring occasionally, for 5 minutes more. Serve topped with cilantro, if desired.",
        "image": "/images/recipes/chhole.webp",
        "calories": 278,
        "fat": 16,
        "carbs": 30,
        "protein": 6,
        "ingredients": [
            {
                "name": "Medium serrano pepper",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Large cloves garlic",
                "quantity": 4,
                "unit": "pieces"
            },
            {
                "name": "Fresh ginger, peeled and coarsely chopped",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Medium yellow onion, chopped (1-inch)",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Canola oil or grapeseed oil",
                "quantity": 6,
                "unit": "tablespoons"
            },
            {
                "name": "Ground coriander",
                "quantity": 2,
                "unit": "teaspoons"
            },
            {
                "name": "Ground cumin",
                "quantity": 2,
                "unit": "teaspoons"
            },
            {
                "name": "Ground turmeric",
                "quantity": 0.5,
                "unit": "teaspoon"
            },
            {
                "name": "No-salt-added canned diced tomatoes with their juice (from a 28-ounce can)",
                "quantity": 2.25,
                "unit": "cups"
            },
            {
                "name": "Kosher salt",
                "quantity": 0.75,
                "unit": "teaspoon"
            },
            {
                "name": "Cans chickpeas, rinsed",
                "quantity": 2,
                "unit": "cans"
            },
            {
                "name": "Garam masala",
                "quantity": 2,
                "unit": "teaspoons"
            }
        ]
    },
    {
        "name": "Classic Sesame Noodles with Chicken",
        "instructions": "1. Cook spaghetti in a pot of boiling water according to package directions. Drain, rinse and transfer to a large bowl.\n2. Combine sesame oil, scallions, garlic, ginger and brown sugar in a small saucepan. Heat over medium heat until starting to sizzle. Cook for 15 seconds. Remove from heat and stir in soy sauce and ketchup. Add to the noodles along with chicken, carrots, snap peas and sesame seeds; gently toss to combine.",
        "image": "/images/recipes/sesame_noodles_with_chicken.webp",
        "calories": 460,
        "fat": 17,
        "carbs": 53,
        "protein": 29,
        "ingredients": [
            {
                "name": "Whole-wheat spaghetti",
                "quantity": 8,
                "unit": "ounces"
            },
            {
                "name": "Toasted (dark) sesame oil",
                "quantity": 3,
                "unit": "tablespoons"
            },
            {
                "name": "Scallions, chopped",
                "quantity": 2,
                "unit": "pieces"
            },
            {
                "name": "Garlic, minced",
                "quantity": 1,
                "unit": "tablespoons"
            },
            {
                "name": "Fresh ginger, minced",
                "quantity": 2,
                "unit": "teaspoons"
            },
            {
                "name": "Brown sugar",
                "quantity": 1,
                "unit": "teaspoon"
            },
            {
                "name": "Reduced-sodium soy sauce",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Ketchup",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Cooked boneless, skinless chicken breast, shredded",
                "quantity": 8,
                "unit": "ounces"
            },
            {
                "name": "Julienned carrots",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Sliced snap peas",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Toasted sesame seeds",
                "quantity": 3,
                "unit": "tablespoons"
            }
        ]
    },
    {
        "name": "Spinach & Feta Scrambled Egg Pitas",
        "instructions": "1. Heat oil in a large nonstick skillet over medium heat. Add spinach and salt and cook until steaming hot, stirring occasionally. Add eggs and cook, stirring the eggs as they set, until they form soft curds and are just moist, 4 to 5 minutes. Add feta and pepper and cook until set.\n2. Spread tapenade (or pesto) inside pita pockets, 2 teaspoons per pita. Divide the egg mixture among the pitas.",
        "image": "/images/recipes/spinach_feta_scrambled_egg_pitas.webp",
        "calories": 303,
        "fat": 16,
        "carbs": 21,
        "protein": 20,
        "ingredients": [
            {
                "name": "Extra-virgin olive oil",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Frozen chopped spinach, thawed, drained and squeezed dry",
                "quantity": 10,
                "unit": "ounces"
            },
            {
                "name": "Large eggs, beaten",
                "quantity": 8,
                "unit": "pieces"
            },
            {
                "name": "Finely crumbled feta cheese",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Sun-dried tomato tapenade or sun-dried tomato pesto",
                "quantity": 8,
                "unit": "teaspoons"
            },
            {
                "name": "Whole-wheat pitas (5-inch), cut in half, warmed if desired",
                "quantity": 4,
                "unit": "pieces"
            }
        ]
    },
    {
        "name": "One-Skillet Bourbon Chicken",
        "instructions": "1. Combine soy sauce, bourbon, apple juice, vinegar, maple syrup, garlic, ginger and crushed red pepper in a small bowl.\n2. Toss together chicken and 1 tablespoon cornstarch in a large bowl. Heat oil in a large nonstick skillet over medium-high heat. Add the chicken; cook, stirring occasionally, until golden brown and crispy, 6 to 8 minutes. Add the soy-bourbon mixture; stir to coat. Cook, stirring often, until the sauce has reduced to a syrupy consistency and the chicken is cooked through, 6 to 8 minutes.\n3. Combine water and the remaining 1 teaspoon cornstarch in a small bowl; stir to mix well. Add to the pan; cook, stirring often, until the sauce thickens and coats the chicken, 1 to 2 minutes.\n4. Divide rice among 4 plates; top with the chicken and sauce. Garnish with scallions, if desired.",
        "image": "/images/recipes/one_skillet_bourbon_chicken.webp",
        "calories": 521,
        "fat": 15,
        "carbs": 48,
        "protein": 40,
        "ingredients": [
            {
                "name": "Lower-sodium soy sauce",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Bourbon",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Unsweetened apple juice",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Rice vinegar",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Pure maple syrup",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Minced fresh garlic",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Grated fresh ginger",
                "quantity": 1,
                "unit": "teaspoon"
            },
            {
                "name": "Crushed red pepper",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "Boneless, skinless chicken thighs, cut into 1/2-inch-thick strips",
                "quantity": 1.5,
                "unit": "pounds"
            },
            {
                "name": "Cornstarch",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Canola oil",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Water",
                "quantity": 2,
                "unit": "teaspoons"
            },
            {
                "name": "Cooked brown rice",
                "quantity": 3,
                "unit": "cups"
            }
        ]
    },

    {
        "name": "Refried Bean & Pico de Gallo Tostadas",
        "instructions": "1. Preheat oven to 375°F. Arrange tortillas on a large baking sheet. Use a pastry brush to brush both sides of each tortilla lightly with oil. Sprinkle with salt. Bake for 5 minutes, flip and cook until lightly browned, about 5 more minutes.\n2. Spread warmed refried beans evenly over the tortillas and top each with pico de gallo.",
        "image": "/images/recipes/refried_bean_pico_de_gallo_tostadas.webp",
        "calories": 276,
        "fat": 6,
        "carbs": 50,
        "protein": 7,
        "ingredients": [
            {
                "name": "Corn tortillas",
                "quantity": 8,
                "unit": "pieces"
            },
            {
                "name": "Olive oil",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Kosher salt",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "Refried beans, warmed",
                "quantity": 1,
                "unit": "can (15 ounces)"
            },
            {
                "name": "Pico de gallo",
                "quantity": 2,
                "unit": "cups"
            }
        ]
    },
    {
        "name": "Scallop Scampi with Pasta",
        "instructions": "1. Bring a saucepan of water to boil; cook pasta according to package directions. Drain and cover to keep warm.\n2. Meanwhile, heat 1 tablespoon oil in a large nonstick skillet over medium-high heat. Pat scallops dry. Sprinkle the scallops evenly on both sides with salt and 1/4 teaspoon ground pink peppercorns (or ground pepper). Add half of the scallops to the pan; cook, turning once, until golden brown, 1 to 2 minutes per side. Transfer to a plate; cover to keep warm. Repeat with the remaining 1 tablespoon oil and scallops.\n3. Reduce heat to medium; add garlic and capers to the pan; cook, stirring constantly, until fragrant, about 30 seconds. Stir in wine, lemon zest, lemon juice and the remaining 1/2 teaspoon ground pink peppercorns (or 1/4 teaspoon ground pepper). Bring to a simmer; cook, stirring occasionally, until reduced by half, about 3 minutes.\n4. Remove from heat; stir in the pasta and parsley. Divide evenly among 4 plates. Top with the scallops and, if desired, additional ground pink peppercorns (or pepper).",
        "image": "/images/recipes/scallop_scampi_with_pasta.webp",
        "calories": 435,
        "fat": 9,
        "carbs": 61,
        "protein": 23,
        "ingredients": [
            {
                "name": "Angel hair pasta",
                "quantity": 10,
                "unit": "ounces"
            },
            {
                "name": "Extra-virgin olive oil",
                "quantity": "2",
                "unit": "tablespoons"
            },
            {
                "name": "Dry sea scallops, tough muscle removed",
                "quantity": 1,
                "unit": "pound"
            },
            {
                "name": "Salt",
                "quantity": 0.5,
                "unit": "teaspoon"
            },
            {
                "name": "Ground pink peppercorns or ground pepper",
                "quantity": 0.75,
                "unit": "teaspoon"
            },
            {
                "name": "Garlic, minced",
                "quantity": 3,
                "unit": "cloves"
            },
            {
                "name": "Capers, drained",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Dry white wine",
                "quantity": 0.5,
                "unit": "cup"
            },
            {
                "name": "Lemon zest",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Lemon juice",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Chopped fresh flat-leaf parsley",
                "quantity": 0.25,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "White Bean & Sun-Dried Tomato Gnocchi",
        "instructions": "1. Heat 1 tablespoon oil in a large nonstick skillet over medium-high heat. Add gnocchi and cook, stirring often, until plumped and starting to brown, about 5 minutes. Add beans and spinach and cook until the spinach is wilted, about 1 minute. Transfer to a plate.\n2. Add the remaining 1 tablespoon oil to the pan and heat over medium heat. Add sun-dried tomatoes and shallot; cook, stirring, for 1 minute. Increase heat to high and add broth. Cook until the liquid has mostly evaporated, about 2 minutes.\n3. Reduce heat to medium and stir in cream, lemon juice, salt and pepper. Return the gnocchi mixture to the pan and stir to coat with the sauce. Serve topped with basil.",
        "image": "/images/recipes/white_bean_sun_dried_tomato_gnocchi.webp",
        "calories": 437,
        "fat": 13,
        "carbs": 69,
        "protein": 14,
        "ingredients": [
            {
                "name": "Sliced oil-packed sun-dried tomatoes plus oil from the jar",
                "quantity": 0.5,
                "unit": "cup"
            },
            {
                "name": "Shelf-stable gnocchi",
                "quantity": 16,
                "unit": "ounces"
            },
            {
                "name": "Low-sodium cannellini beans, rinsed",
                "quantity": 15,
                "unit": "ounces"
            },
            {
                "name": "Baby spinach",
                "quantity": 5,
                "unit": "ounces"
            },
            {
                "name": "Large shallot, minced",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Low-sodium no-chicken broth or chicken broth",
                "quantity": 0.33,
                "unit": "cup"
            },
            {
                "name": "Heavy cream",
                "quantity": 0.33,
                "unit": "cup"
            },
            {
                "name": "Lemon juice",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Salt",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "Ground pepper",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "Fresh basil leaves",
                "quantity": 3,
                "unit": "tablespoons"
            }
        ]
    },
    {
        "name": "Farro Bowl with Rotisserie Chicken",
        "instructions": "1. Microwave farro according to package directions; set aside to cool slightly.\n2. Toss together salad kit in a large bowl. Add chicken and the cooled farro; toss to combine.",
        "image": "/images/recipes/farro_bowl_rotisserie_chicken.webp",
        "calories": 288,
        "fat": 3,
        "carbs": 40,
        "protein": 27,
        "ingredients": [
            {
                "name": "Microwaveable farro",
                "quantity": 8.5,
                "unit": "ounces"
            },
            {
                "name": "Mediterranean-style salad kit",
                "quantity": 10,
                "unit": "ounces"
            },
            {
                "name": "Chopped rotisserie chicken",
                "quantity": 1,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Teriyaki Edamame Sauté",
        "instructions": "Heat oil in a large nonstick skillet over medium heat. Add coleslaw mix and cook, stirring, until the cabbage begins to soften, about 2 minutes. Stir in edamame and teriyaki sauce. Cook, stirring, until the edamame are heated through and the sauce thickens, about 1 minute more.",
        "image": "/images/recipes/teriyaki_edamame_saute.webp",
        "calories": 249,
        "fat": 12,
        "carbs": 21,
        "protein": 17,
        "ingredients": [
            {
                "name": "Olive oil",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Tricolor coleslaw mix",
                "quantity": 8,
                "unit": "ounces"
            },
            {
                "name": "Shelled edamame, thawed if frozen",
                "quantity": 2,
                "unit": "cups"
            },
            {
                "name": "Reduced-sodium teriyaki sauce",
                "quantity": 0.25,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Breakfast Naan Pizza",
        "instructions": "1. Preheat oven to 425°F. Coat a rimmed baking sheet with cooking spray.\n2. Place naan on the prepared pan. Mix ricotta, marinara (or pesto) and lemon zest in a small bowl. Spread the mixture onto the naan, creating a well in the center. Carefully crack egg into the well. Sprinkle with Parmesan. Bake until the naan is golden, the egg white is set and the cheese is melted, 8 to 10 minutes. Garnish with basil and pepper, if desired.",
        "image": "/images/recipes/breakfast_naan_pizza.webp",
        "calories": 458,
        "fat": 17,
        "carbs": 52,
        "protein": 24,
        "ingredients": [
            {
                "name": "Whole-wheat naan",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Part-skim ricotta cheese",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Low-sodium marinara or pesto",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Lemon zest",
                "quantity": 0.5,
                "unit": "teaspoon"
            },
            {
                "name": "Large egg",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Grated Parmesan cheese",
                "quantity": 1,
                "unit": "tablespoon"
            }
        ]
    },
    {
        "name": "Lentil Curry with Cauliflower Rice",
        "instructions": "1. Prepare cauliflower rice according to package directions; divide between two bowls.\n2. Combine lentils and simmer sauce in a small skillet or saucepan over medium-low heat; heat to steaming, stirring often. Serve the lentils atop the cauliflower rice.",
        "image": "/images/recipes/lentil_curry_cauliflower_rice.webp",
        "calories": 257,
        "fat": 5,
        "carbs": 38,
        "protein": 14,
        "ingredients": [
            {
                "name": "Frozen cauliflower rice medley with peas and carrots",
                "quantity": 1,
                "unit": "package (10 ounces)"
            },
            {
                "name": "Refrigerated cooked lentils",
                "quantity": 1,
                "unit": "package (9 ounces)"
            },
            {
                "name": "Prepared curry simmer sauce",
                "quantity": 0.33,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Crispy Fish Taco Bowls",
        "instructions": "1. Preheat oven to 475 degrees F. Place a wire rack on a rimmed baking sheet; coat with cooking spray.\n2. Coat fish with 1/4 cup mayonnaise. Place panko in a shallow dish and roll the fish in it. Transfer to the rack on the pan. Bake the fish until crispy and cooked through, 8 to 12 minutes, depending on thickness.\n3. Meanwhile, mix the remaining 1/4 cup mayonnaise, sour cream, adobo sauce, lime juice and pinch of salt in a small bowl.\n4. Sprinkle the fish with the remaining 1/4 teaspoon salt and pepper. Divide rice among 4 bowls and top with the fish, cabbage, radishes, the sauce and cilantro, if desired.",
        "image": "/images/recipes/crispy_fish_taco_bowls.webp",
        "calories": 478,
        "fat": 25,
        "carbs": 42,
        "protein": 20,
        "ingredients": [
            {
                "name": "White fish, such as cod, cut into 2-inch pieces",
                "quantity": 1,
                "unit": "pound"
            },
            {
                "name": "Mayonnaise",
                "quantity": 0.5,
                "unit": "cup"
            },
            {
                "name": "Panko breadcrumbs",
                "quantity": 0.75,
                "unit": "cup"
            },
            {
                "name": "Sour cream",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Adobo sauce from chipotle peppers",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Lime juice",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Salt",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "Ground pepper",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "Cooked brown rice",
                "quantity": 2,
                "unit": "cups"
            },
            {
                "name": "Shredded cabbage",
                "quantity": 2,
                "unit": "cups"
            },
            {
                "name": "Thinly sliced radishes",
                "quantity": 1,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Mozzarella, Basil & Zucchini Frittata",
        "instructions": "1. Position rack in upper third of oven; preheat broiler.\n2. Heat oil in a large broiler-safe nonstick or cast-iron skillet over medium-high heat. Add onion and zucchini and cook, stirring frequently, until soft, 3 to 5 minutes.\n3. Meanwhile, whisk eggs, salt and pepper in a bowl. Pour the eggs over the vegetables in the pan. Cook, lifting the edges to allow uncooked egg from the middle to flow underneath, until nearly set, about 2 minutes. Arrange mozzarella and sun-dried tomatoes on top and place the skillet under the broiler until the eggs are slightly browned, 1 1/2 to 2 minutes. Let stand for 3 minutes. Top with basil.\n4. To release the frittata from the pan, run a spatula around the edge, then underneath, until you can slide or lift it out onto a cutting board or serving plate. Cut into 4 slices and serve.",
        "image": "/images/recipes/mozzarella_basil_zucchini_frittata.webp",
        "calories": 292,
        "fat": 21,
        "carbs": 8,
        "protein": 18,
        "ingredients": [
            {
                "name": "Extra-virgin olive oil",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Thinly sliced red onion",
                "quantity": 1.5,
                "unit": "cups"
            },
            {
                "name": "Chopped zucchini",
                "quantity": 1.5,
                "unit": "cups"
            },
            {
                "name": "Large eggs, beaten",
                "quantity": 7,
                "unit": "pieces"
            },
            {
                "name": "Salt",
                "quantity": 0.5,
                "unit": "teaspoon"
            },
            {
                "name": "Freshly ground pepper",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "Pearl-size or baby fresh mozzarella balls (about 4 ounces)",
                "quantity": 0.67,
                "unit": "cup"
            },
            {
                "name": "Chopped soft sun-dried tomatoes",
                "quantity": 3,
                "unit": "tablespoons"
            },
            {
                "name": "Thinly sliced fresh basil",
                "quantity": 0.25,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Salmon Tacos with Pineapple Salsa",
        "instructions": "1. Arrange oven rack in upper third of oven so salmon will be 2 to 3 inches below heat source. Preheat broiler to high.\n 2. Line a baking sheet with foil. Lay salmon on the foil, skin-side down. Broil, rotating the pan from front to back once, until the salmon is starting to brown, is opaque on the sides and the thinner parts of the fillet are sizzling, 5 to 8 minutes, depending on thickness.\n3. Sprinkle the salmon with chili powder and 1/4 teaspoon salt. Drizzle with 1 teaspoon oil and brush with a heatproof brush to moisten the spices. Return to the oven and continue broiling until the salmon just flakes and the spices are browned, 1 to 2 minutes more\n4. Meanwhile, toss coleslaw mix with lime juice, the remaining 1 tablespoon oil and the remaining 1/2 teaspoon salt.\n5. Flake the salmon, discarding skin. Divide the salmon among tortillas and top with salsa. Serve with the coleslaw and garnish with cilantro and hot sauce, if desired.",
        "image": "/images/recipes/salmon_tacos_pineapple_salsa.webp",
        "calories": 320,
        "fat": 11,
        "carbs": 30,
        "protein": 26,
        "ingredients": [
            {
                "name": "Salmon fillet",
                "quantity": 1,
                "unit": "pound"
            },
            {
                "name": "Chili powder",
                "quantity": 1,
                "unit": "teaspoon"
            },
            {
                "name": "Salt",
                "quantity": 0.75,
                "unit": "teaspoon"
            },
            {
                "name": "Extra-virgin olive oil",
                "quantity": 1.33,
                "unit": "tablespoon"
            },
            {
                "name": "Coleslaw mix",
                "quantity": 9,
                "unit": "ounces"
            },
            {
                "name": "Lime, juiced",
                "quantity": 0.5,
                "unit": "piece"
            },
            {
                "name": "Corn tortillas",
                "quantity": 8,
                "unit": "tortillas"
            },
            {
                "name": "Purchased pineapple salsa",
                "quantity": 0.75,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Quick Shrimp Puttanesca",
        "instructions": "1. Bring a large pot of water to a boil. Cook linguine according to package instructions. Drain.\n2. Meanwhile, heat oil in a large skillet over high heat. Add shrimp in a single layer and cook, undisturbed, until browned on the bottom, 2 to 3 minutes. Stir in tomato sauce. Add artichoke hearts, olives, capers and salt; cook, stirring often, until the shrimp is cooked through and the artichoke hearts are hot, 2 to 3 minutes longer.\n3. Add the drained noodles to the sauce and stir to combine. Divide among 4 pasta bowls. Serve hot.",
        "image": "/images/recipes/shrimp_puttanesca.webp",
        "calories": 390,
        "fat": 8,
        "carbs": 43,
        "protein": 37,
        "ingredients": [
            {
                "name": "Refrigerated fresh linguine noodles",
                "quantity": 8,
                "unit": "ounces"
            },
            {
                "name": "Extra-virgin olive oil",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Peeled and deveined large shrimp",
                "quantity": 1,
                "unit": "pound"
            },
            {
                "name": "No-salt-added tomato sauce",
                "quantity": 1.25,
                "unit": "cups"
            },
            {
                "name": "Frozen quartered artichoke hearts, thawed",
                "quantity": 1.25,
                "unit": "cups"
            },
            {
                "name": "Chopped pitted Kalamata olives",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Capers, rinsed",
                "quantity": 1,
                "unit": "tablespoon"
            },
            {
                "name": "Salt",
                "quantity": 0.25,
                "unit": "teaspoon"
            }
        ]
    },
    {
        "name": "Beef Pad Thai",
        "instructions": "1. Bring a pot of water to a boil. Cook noodles in boiling water according to package instructions until al dente. Reserve 1 cup cooking liquid and drain the noodles.\n2. Meanwhile, heat oil in a large nonstick skillet over medium-high heat. Add beef, and cook, crumbling with a wooden spoon, until browned, 4 to 5 minutes. Add snap peas, carrots and scallions, and cook, stirring often, until the peas are bright green, 2 to 3 minutes.\n3. Add sauce, the noodles and about half of the reserved cooking liquid; stir with tongs to coat. Reduce heat to medium-low; simmer, adding more of the reserved cooking liquid to moisten if necessary and stirring occasionally, until the vegetables are crisp-tender, 2 to 3 minutes longer. Serve hot with chopped peanuts and lime wedges.",
        "image": "/images/recipes/beef_pad_thai.webp",
        "calories": 465,
        "fat": 13,
        "carbs": 65,
        "protein": 23,
        "ingredients": [
            {
                "name": "Pad thai rice noodles, preferably brown rice noodles",
                "quantity": 8,
                "unit": "ounces"
            },
            {
                "name": "Canola oil",
                "quantity": 2,
                "unit": "teaspoons"
            },
            {
                "name": "Lean ground beef",
                "quantity": 0.75,
                "unit": "pound"
            },
            {
                "name": "Stringless snap peas",
                "quantity": 2,
                "unit": "cups"
            },
            {
                "name": "Matchstick carrots",
                "quantity": 2,
                "unit": "cups"
            },
            {
                "name": "Chopped scallions",
                "quantity": 0.5,
                "unit": "cup"
            },
            {
                "name": "Pad thai sauce",
                "quantity": 0.5,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Vegan Coconut Chickpea Curry",
        "instructions": "1. Heat oil in a large skillet over medium-high heat. Add onion, pepper and zucchini; cook, stirring often, until the vegetables begin to brown, 5 to 6 minutes.\n2. Add chickpeas, simmer sauce and broth and bring to a simmer, stirring. Reduce heat to medium-low and simmer until the vegetables are tender, 4 to 6 minutes. Stir in spinach just before serving. Serve over rice.",
        "image": "/images/recipes/vegan_coconut_chickpea_curry.webp",
        "calories": 471,
        "fat": 18,
        "carbs": 66,
        "protein": 11,
        "ingredients": [
            {
                "name": "Avocado oil or canola oil",
                "quantity": 2,
                "unit": "teaspoons"
            },
            {
                "name": "Chopped onion",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Diced bell pepper",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Medium zucchini, halved and sliced",
                "quantity": 1,
                "unit": "piece"
            },
            {
                "name": "Chickpeas, drained and rinsed",
                "quantity": 1,
                "unit": "can (15 ounces)"
            },
            {
                "name": "Coconut curry simmer sauce",
                "quantity": 1.5,
                "unit": "cups"
            },
            {
                "name": "Vegetable broth",
                "quantity": 0.5,
                "unit": "cup"
            },
            {
                "name": "Baby spinach",
                "quantity": 4,
                "unit": "cups"
            },
            {
                "name": "Precooked brown rice, heated according to package instructions",
                "quantity": 2,
                "unit": "cups"
            }
        ]
    },
    {
        "name": "One-Pot Spinach, Chicken Sausage & Feta Pasta",
        "instructions": "Heat oil in a large straight-sided skillet over medium-high heat. Add sausage, onion and garlic; cook, stirring often, until the onion is starting to brown, 4 to 6 minutes. Add tomato sauce, spinach, pasta and olives; cook, stirring often, until bubbling hot and the spinach is wilted, 3 to 5 minutes. Add 1 to 2 tablespoons water, if necessary, to keep the pasta from sticking. Stir in feta and basil, if using.",
        "image": "/images/recipes/one_pot_spinach_chicken_sausage_feta_pasta.webp",
        "calories": 487,
        "fat": 20,
        "carbs": 59,
        "protein": 23,
        "ingredients": [
            {
                "name": "Olive oil",
                "quantity": 2,
                "unit": "tablespoons"
            },
            {
                "name": "Cooked chicken sausage, sliced into rounds",
                "quantity": 3,
                "unit": "links (9 ounces)"
            },
            {
                "name": "Diced onion",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Garlic, minced",
                "quantity": 1,
                "unit": "clove"
            },
            {
                "name": "No-salt-added tomato sauce",
                "quantity": 1,
                "unit": "can (8 ounces)"
            },
            {
                "name": "Baby spinach",
                "quantity": 4,
                "unit": "cups (lightly packed)"
            },
            {
                "name": "Cooked whole-wheat rotini pasta",
                "quantity": 6,
                "unit": "cups"
            },
            {
                "name": "Chopped pitted Kalamata olives",
                "quantity": 0.25,
                "unit": "cup"
            },
            {
                "name": "Finely crumbled feta cheese",
                "quantity": 0.5,
                "unit": "cup"
            },
            {
                "name": "Chopped fresh basil",
                "quantity": 0.25,
                "unit": "cup"
            }
        ]
    },
    {
        "name": "Philly Cheese Steak Sloppy Joes",
        "instructions": "1. Arrange oven rack in upper third of the oven. Preheat broiler. Line a baking sheet with foil.\n2. Heat oil in a large skillet over medium-high heat. Add beef, oregano and salt; cook, crumbling with a wooden spoon, until cooked through, 4 to 6 minutes. Add tomato sauce and cook until bubbling, 1 to 2 minutes.\n3. Meanwhile, warm peppers and onions in a small skillet over medium heat, stirring often. (Alternatively, microwave for 1 minute to reheat.)\n4. Lay rolls, split-side open, on the prepared baking sheet. Broil, rotating the pan as necessary, until just starting to brown and toast, 1 to 2 minutes. Remove from the oven.\n5. Top toasted buns with the beef mixture, dividing evenly. Top with the peppers and onions and then cheese. Broil just until the cheese is melted, 30 seconds to 1 minute. Wrap each sub in foil until ready to eat. Serve hot.",
        "image": "/images/recipes/philly_cheese_steak_sloppy_joes.webp",
        "calories": 413,
        "fat": 20,
        "carbs": 29,
        "protein": 30,
        "ingredients": [
            {
                "name": "Organic canola oil or avocado oil",
                "quantity": 2,
                "unit": "teaspoons"
            },
            {
                "name": "Lean ground beef",
                "quantity": 1,
                "unit": "pound"
            },
            {
                "name": "Dried oregano",
                "quantity": 1,
                "unit": "teaspoon"
            },
            {
                "name": "Salt",
                "quantity": 0.25,
                "unit": "teaspoon"
            },
            {
                "name": "No-salt-added tomato sauce",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Sautéed Peppers & Onions",
                "quantity": 1,
                "unit": "cup"
            },
            {
                "name": "Whole-wheat sub rolls",
                "quantity": 4,
                "unit": "rolls (6 inches), split"
            },
            {
                "name": "Reduced-sodium provolone cheese",
                "quantity": 4,
                "unit": "slices"
            }
        ]
    }
]

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/fit-check');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error.'));
db.once('open', () => {
    console.log('Database connected.')
})

const seedDB = async () => {
    await Recipe.deleteMany({});

    for (let i = 0; i < recipes.length; i++) {
        const recipe = new Recipe(recipes[i]);
        await recipe.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})