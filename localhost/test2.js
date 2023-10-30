
import {
    f_assert_equals, 
    f_deno_test, 
    f_deno_test_summary,
    f_deno_test_all_and_print_summary 
} from "https://deno.land/x/deno_test_server_and_client_side@0.4/mod.js"


import {
    f_o_vec2,
    f_o_vec3, 
    f_o_vec4
} from "./module.js"

//readme.md:start
//md: ![f_o_vec logo](./f_o_vec_library.png)
//md: # f_o_vec
//md: this is a small library that handles vectors in javascript, at least as good as it can be done UwU
//readme.md:end

await f_deno_test_all_and_print_summary(
    [
        f_deno_test("instanciate vectors", () => {
            //readme.md:start
            //md: ## instanciate vectors
            var o = f_o_vec2(23);
            f_assert_equals(o.toString(),'(23,23)');

            var o = f_o_vec2(23, 52);
            f_assert_equals(o.toString(),'(23,52)');

            var o = f_o_vec3(1, f_o_vec2(2,18));
            f_assert_equals(o.toString(),'(1,2,18)');

            var o = f_o_vec4(f_o_vec2(2, 3), 99, f_o_vec2(12, 13), 33);
            f_assert_equals(o.toString(),'(2,3,99,12)');
            //readme.md:end
        }),
        f_deno_test("access vector components", () => {
            //readme.md:start
            //md: ## access vector components
            var o = f_o_vec4(2,3,4,5);

            f_assert_equals(o.x, 2)
            f_assert_equals(o.n_x, 2)
            f_assert_equals(o[0], 2)

            f_assert_equals(o.y, 3)
            f_assert_equals(o.n_y, 3)
            f_assert_equals(o[1], 3)

            f_assert_equals(o.z, 4)
            f_assert_equals(o.n_z, 4)
            f_assert_equals(o[2], 4)

            f_assert_equals(o.w, 5)
            f_assert_equals(o.n_w, 5)
            f_assert_equals(o[3], 5)

            //set components
            var o = f_o_vec4(0);
            f_assert_equals(o.x+=1, 1)
            f_assert_equals(o.n_x+=1, 2)
            f_assert_equals(o[0]+=1, 3)

            //readme.md:end
        }),
        f_deno_test("vector operations: add", () => {
            //readme.md:start
            // md: ## vector operations

            //md: ### add
            f_assert_equals(f_o_vec2(1,1).add(3,-2).toString(),'(4,-1)')
            //md: one number get converted to a vector of the same number of components
            //md: so o_vec2.add(2) <=> o_vec2.add(f_o_vec2(2))
            f_assert_equals(f_o_vec2(4,8).add(10).toString(),'(14,18)')
            //md: operate with multiple parameters
            //md: o_vec2.add(10, f_o_vec2(10,20), 200) <=> o_vec2 + vec2(10,10) + vec2(10,20) + vec2(200,200)
            f_assert_equals(f_o_vec2(4,8).add(10, f_o_vec2(10,20),200).toString(),'(224,238)') 

            //md: ### manipulate current reference 'in place'
            //md: if we want to cahnge the vector variable 'in place'
            //md: we can do it by adding to the function name
            //md: the 'eq' which stands for 'equal'
            //md: vec2.addeq(10) => vec2 += vec2(10,10)
            //md: vec2.subtracteq(10) => vec2 -= vec2(10,10)
            //md: vec2.multiplyeq(10) => vec2 *= vec2(10,10)
            //md: vec2.divideeq(10) => vec2 /= vec2(10,10)
            //md: and so on...
            //md: the vector gets changed in place
            let o = f_o_vec2(1,2);
            o.add(2,1)
            f_assert_equals(o.toString(),'(1,2)')// since we just called 'add', the vector is the same but 'add' returned a new vector
            o.addeq(2,1)// the vector has now been changed/updated
            f_assert_equals(o.toString(),'(3,3)')
            //readme.md:end
        }),
        f_deno_test("vector operations: subtract", () => {
            //md: ### subtract
            f_assert_equals(f_o_vec2(5,5).subtract(2,-2).toString(),'(3,7)')
            //readme.md:end
        }),
        f_deno_test("vector operations: multiply", () => {
            //md: ### multiply
            f_assert_equals(f_o_vec2(1,1).multiply(2,3).toString(),'(2,3)')
            //readme.md:end
        }),
        f_deno_test("vector operations: divide", () => {
            //md: ### multiply
            f_assert_equals(f_o_vec2(4,3).divide(2,3).toString(),`(2,1)`)
            //readme.md:end
        }),

        f_deno_test("length", () => {
            //readme.md:start
            // md: ## other manipulations

            //md: ### length
            f_assert_equals(f_o_vec2(3,4).length(),5)
            f_assert_equals(f_o_vec3(8,11,16).length(),21)   
            //md: unfortunately there is no pythagorean quituple    
            f_assert_equals(f_o_vec4(2,3,6,7).length(),9.899494936611665)  
            //readme.md:end
         
            
        }),
        f_deno_test("normalize", () => {
            //readme.md:start
            //md: ### normalize 
            f_assert_equals(f_o_vec3(1,2,3).normalize().toString(),`(0.2672612419124244,0.5345224838248488,0.8017837257372732)`)
            var o = f_o_vec3(1,2,3);
            o.normalizeeq();
            f_assert_equals(o.toString(),`(0.2672612419124244,0.5345224838248488,0.8017837257372732)`)
            //readme.md:end

        }),
        f_deno_test("fract", () => {
            //readme.md:start
            //md: ### fract (get part after decimal point)
            let o = f_o_vec2(12.8291214, 0.5534)
            o.fracteq()
            f_assert_equals(o.toString(),`(0.8291214,0.5534)`)
            //readme.md:end

        }),
        f_deno_test("component operations", () => {
            //readme.md:start
            //md: ### components operated on each other
            var n = f_o_vec3(1,2,3).componentsadded()
            f_assert_equals(n,6)//`1+2+3
            var n = f_o_vec3(1,2,3).componentssubtracted()
            f_assert_equals(n,-6)//`-1-2-3
            var n = f_o_vec3(1,2,3).componentsmultiplied()
            f_assert_equals(n,6)//`1*2*3
            var n = f_o_vec3(1,2,3).componentsdivided()
            f_assert_equals(n,0.16666666666666666)//`(1/2)/3
            //readme.md:end
        }),
        f_deno_test("dot", () => {
            //readme.md:start
            //md: ### dot / dot product
            let n = f_o_vec2(2,3).dot(4,5)
            f_assert_equals(n,23)//`(2*4+3*5)=>(8+15)=>(23)`)

            let n2 = f_o_vec2(2,3).dot(f_o_vec2(4,5), f_o_vec2(10,20))
            f_assert_equals(n2,380)//`(2*4*10+3*5*20)=>(8*10+15*20)=>(80+300)=>(380)`)
            //readme.md:end
        }),
        f_deno_test("cross", () => {
            //readme.md:start
            //md: ### dot / dot product
            var o = f_o_vec3(2,3,4).cross(5,6,7)
            f_assert_equals(o.toString(),'(-3,6,-3)')
            // readme.md:end
            var o = f_o_vec3(2,3,4);
            o.crosseq(5,6,7)
            f_assert_equals(o.toString(),'(-3,6,-3)')
            var o = f_o_vec3(2,3,4);
            o.crosseq(1)
            f_assert_equals(o.toString(),'(-1,2,-1)')
            //readme.md:end
        }),
        f_deno_test("angle", () => {
            //readme.md:start
            //md: ### angle between two vectors
            var n_ang = f_o_vec3(2,3,4).angle(-5,6,-7)
            f_assert_equals(n_ang,1.9327554742236706)
            var n_ang_deg = f_o_vec3(2,3,4).angle_deg(-5,6,-7)
            f_assert_equals(n_ang_deg,110.73873150382231)
            //readme.md:end
        }),
        
    ]
)





// //md: ## access vector components
// var o = f_o_vec4(2,3,4,5);
// console.log(o.x)
