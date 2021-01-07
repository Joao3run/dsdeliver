package br.com.brn.dsdeliver.repositories;

import br.com.brn.dsdeliver.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    /*
     * @author BRUN on 06/01/2021
     */

    List<Product> findAllByOrderByNameAsc();



}
