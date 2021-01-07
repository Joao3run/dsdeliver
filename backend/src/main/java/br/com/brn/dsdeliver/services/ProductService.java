package br.com.brn.dsdeliver.services;

import br.com.brn.dsdeliver.dto.ProductDTO;
import br.com.brn.dsdeliver.entities.Product;
import br.com.brn.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    /*
     * @author BRUN on 06/01/2021
     */

    @Autowired
    private ProductRepository repository;

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        List<Product> list = repository.findAllByOrderByNameAsc();
        return list.stream().map(prod -> new ProductDTO(prod)).collect(Collectors.toList());
    }
}
