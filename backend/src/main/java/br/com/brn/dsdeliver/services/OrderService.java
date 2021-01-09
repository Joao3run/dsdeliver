package br.com.brn.dsdeliver.services;

import br.com.brn.dsdeliver.dto.OrderDTO;
import br.com.brn.dsdeliver.dto.ProductDTO;
import br.com.brn.dsdeliver.entities.Order;
import br.com.brn.dsdeliver.entities.Product;
import br.com.brn.dsdeliver.enums.OrderStatus;
import br.com.brn.dsdeliver.repositories.OrderRepository;
import br.com.brn.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    /*
     * @author BRUN on 06/01/2021
     */

    @Autowired
    private OrderRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(ord -> new OrderDTO(ord)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO dto) {
        Order order = new Order(null,dto.getAddress(), dto.getLatitude(), dto.getLongitude(),
                Instant.now(), OrderStatus.PENDING);
        for (ProductDTO prod : dto.getProducs()) {
            Product product = productRepository.getOne(prod.getId());
            order.getProducts().add(product);
        }
        order = repository.save(order);
        return new OrderDTO(order);
    }
}
