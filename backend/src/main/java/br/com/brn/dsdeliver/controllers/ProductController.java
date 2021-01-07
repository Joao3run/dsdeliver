package br.com.brn.dsdeliver.controllers;

import br.com.brn.dsdeliver.dto.ProductDTO;
import br.com.brn.dsdeliver.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

    /*
     * @author BRUN on 06/01/2021
     */

    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll() {
        List<ProductDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

}
